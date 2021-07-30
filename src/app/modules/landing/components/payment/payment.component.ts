import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginRegModalComponent } from '../../../shared/components/login-reg-modal/login-reg-modal.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../../../shared/models/user.model';
import { LandingService } from '../../landing.service';
import { environment } from '../../../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { CommunicationService } from '../../../shared/services/communication.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

declare let Stripe: any;
declare let window: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @ViewChild(LoginRegModalComponent) loginRegModalComponent: LoginRegModalComponent;

  public user: UserModel;
  public selectPrice = false;
  public payment: {
    success: false;
    cancel: false;
  };
  modalRef: BsModalRef;
  private paymentPlan: string;
  private stripe = new Stripe(environment.STRIPE.PUB_KEY);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private landingService: LandingService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private cookieService: CookieService,
  ) {}

  ngOnInit(): void {
    // this.spinner.show();

    if (this.cookieService.get('paymentPlan')) {
      this.paymentPlan = this.cookieService.get('paymentPlan');
    }

    if (this.cookieService.get('userProfile')) {
      this.user = JSON.parse(this.cookieService.get('userProfile'));
    }
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe((params) => {
      if (params.status === 'success') {
        this.selectPrice = false;
        this.success();
      } else if (params.status === 'cancel') {
        this.toastr.error('Payment not success');
        this.error();
      } else if (params.status === 'check') {
        this.check();
      } else if (params.status === 'select') {
        if (this.paymentPlan && this.user) {
          this.select(this.paymentPlan);
        } else {
          this.selectPrice = true;
        }
      }
      this.spinner.hide();
    });
  }

  async success(): Promise<void> {
    try {
      const payment: any = await this.landingService
        .checkUserIsPayed(this.user.uid)
        .toPromise();
      if (!payment || !payment.paymentid || !payment.uid) {
        this.toastr.error('Payment not success');
        this.router.navigate([`/payments/select`]);
        return;
      }

      this.router.navigate([`/dashboard`]);
    } catch {
      this.error();
    }
  }

  async check(): Promise<void> {
    try {
      const payment: any = await this.landingService
        .checkUserIsPayed(this.user.uid)
        .toPromise();
      if (!payment || !payment.paymentid || !payment.uid) {
        this.toastr.error('Need pay for service');
        this.router.navigate([`/payments/select`]);
        return;
      }

      this.spinner.hide();
      this.router.navigate([`/dashboard`]);
    } catch {
      this.error();
    }
  }

  select(type: string): void {
    if (!this.user) {
      this.loginRegModalComponent.openModal('reg');
      this.cookieService.set('paymentPlan', type);
      return;
    }
    let stripePrice: string = environment.STRIPE.M3;

    if (type === 'm3') {
      stripePrice = environment.STRIPE.M3;
    } else if (type === 'm6' ) {
      stripePrice = environment.STRIPE.M6;
    } else if (type === 'm12' ) {
      stripePrice = environment.STRIPE.M12;
    }

    this.stripe
    .redirectToCheckout({
      items: [{ plan: stripePrice, quantity: 1 }],
      successUrl: `${environment.FE_URL}/payments/success`,
      cancelUrl: `${environment.FE_URL}/payments/cancel`,
      customerEmail: this.user.email
    })
    .then((result) => {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    });
  }

  error(): void {
    // this.spinner.hide();
    this.router.navigate([`/payments/select`]);

  }

}
