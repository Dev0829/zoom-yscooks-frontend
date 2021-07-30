import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnDestroy,
  ElementRef
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../../../shared/models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../services/user.service';
import { InvitationComponent } from '../invitation/invitation.component';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('video1') video1: ElementRef;
  @ViewChild(InvitationComponent) invitationComponent: InvitationComponent;
  @ViewChild('emptyModal') emptyModal: ModalDirective;
  @ViewChild(EditProfileComponent) editProfileComponent: EditProfileComponent;

  public percent = 0;
  public user: UserModel = {};
  public superCookPoints: number = null;
  public points = 0;
  popovers = { invite: false, posts: false, lessons: false };

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private cookieService: CookieService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('userProfile') || '{}');
    this.getUserProfile();
    this.checkUserIsPayed(); // need to add;
  }

  ngAfterViewInit(): void {
    if (this.cookieService.get('showDashboardPopovers')) {
      this.popovers = { invite: true, posts: true, lessons: true };
      this.emptyModal.show();
      this.emptyModal.onHide.subscribe(() => {
        this.popovers = { invite: false, posts: false, lessons: false };
        this.cookieService.delete('showDashboardPopovers');
      });
    }

    setTimeout(() => {
        const elem1 = this.video1.nativeElement as HTMLVideoElement;
        elem1.muted = true;
        elem1.play();
      }, 500);
  }


  mediaUploaded(media): void {
    const feed = {
      typeName: 'Photo',
      fileId: media.fileId,
    };
    if (media.fileType === 'IMAGE') {
      feed.typeName = 'Photo';
    } else if (media.fileType === 'VIDEO') {
      feed.typeName = 'Video';
    }
    // this.userService.addUserFeed(feed).subscribe();
  }

  getUserProfile(): void {
    this.spinner.show();
    this.userService.getUserProfile().subscribe(
      (data) => {
        this.user = data;
        this.cookieService.set('userProfile', JSON.stringify(data));
        this.spinner.hide();
      },
      (error) => {
        console.warn(error);
        this.spinner.hide();
      }
    );
  }

  openInvitation(): void {
    this.invitationComponent.openInvitationModal();
  }

  ngOnDestroy(): void {
    if (this.cookieService.get('showDashboardPopovers')) {
      this.cookieService.delete('showDashboardPopovers');
    }
  }

  async checkUserIsPayed(): Promise<void> {
    try {
      const payment: any = await this.userService
        .checkUserIsPayed(this.user.uid)
        .toPromise();
      if (!payment || !payment.paymentid || !payment.uid) {
        // this.toastr.error("Need pay for service");
        this.router.navigate([`/payments/check`]);
        return;
      }
    } catch (e) {
      this.router.navigate([`/payments/check`]);
    }
  }

  openEditModal(): void {
    this.editProfileComponent.openModal(this.user);
  }

}
