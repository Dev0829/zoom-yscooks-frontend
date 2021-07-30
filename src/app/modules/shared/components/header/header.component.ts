import { CookieService } from 'ngx-cookie-service';
import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  OnDestroy,
  Input,
} from '@angular/core';
import { LoginRegModalComponent } from '../login-reg-modal/login-reg-modal.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserModel } from '../../models/user.model';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: false, autoClose: true },
    },
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild(LoginRegModalComponent)
  loginRegModalComponent: LoginRegModalComponent;

  @Input() btnClass = '';

  public searchInput = '';
  public data: any = {};
  public isCollapsed = false;
  private userProfile: UserModel;

  private loginSubscription: Subscription;
  private signUpSubscription: Subscription;
  private signUpSubGiftSubscription: Subscription;

  constructor(
    private cookieService: CookieService,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private route: Router,
    private com: CommunicationService
  ) {}

  ngOnInit(): void {
    // console.log(this.btnClass);
    this.activatedRoute.data.subscribe((data) => {
      this.data = data;
    });
    this.userProfile = JSON.parse(
      this.cookieService.get('userProfile') || '{}'
    );

    this.loginSubscription = this.com.$loginCalled.subscribe(() => {
      this.openLogRegModal('login');
    });

    this.signUpSubscription = this.com.$signUpCalled.subscribe(() => {
      this.openLogRegModal('reg');
    });

    this.signUpSubGiftSubscription = this.com.$calSignUpGiftCalled.subscribe(() => {
      this.openLogRegModal('gift');
    });
  }

  ngOnDestroy(): void{
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }

    if (this.signUpSubscription) {
      this.signUpSubscription.unsubscribe();
    }

    if (this.signUpSubGiftSubscription) {
      this.signUpSubGiftSubscription.unsubscribe();
    }

  }

  public openLogRegModal(data): void {
    this.loginRegModalComponent.openModal(data);
  }

  isLoggined(): boolean {
    return this.authenticationService.isAuthorized();
  }

  logout(): void {
    this.cookieService.delete('token');
    this.cookieService.delete('userProfile');
    this.cookieService.deleteAll();
    setTimeout(() => {
      this.route.navigate(['/']);
    }, 500);
  }

  isAdmin(): boolean {
    return this.userProfile.isAdmin;
  }

  isSuperCook(): boolean {
    return true;
  }

  profileUrl(): string {
    return '';
  }
}
