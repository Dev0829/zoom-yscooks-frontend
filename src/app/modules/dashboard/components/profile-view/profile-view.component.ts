import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../../../shared/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {
  @ViewChild(EditProfileComponent) editProfileComponent: EditProfileComponent;

  public profile: UserModel;
  public user: UserModel;
  public feed = [];
  public revedBussines = [];
  public paginator = {
    total: 0,
    count: 21,
    page: 1,
  };
  public isUserConnected = false;
  public posts = [];
  public friends = [];

  constructor(
    private cookieService: CookieService,
    private spinner: NgxSpinnerService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    // private readonly meta: MetaService,
    private toastr: ToastrService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    if (this.cookieService.get('userProfile')) {
      this.user = JSON.parse(this.cookieService.get('userProfile'));
    }
    this.route.params.subscribe((data) => {
      this.getUserProfileById(data.id);
    });
  }

  getUserProfileById(userId): void {
    this.spinner.show();
    this.userService.getUserById(userId).subscribe(
      (data) => {
        this.spinner.hide();
        this.profile = data;
        // this.meta.setTag('og:image', encodeURI(this.profile.profilePictureURL));
        // this.meta.setTag('og:title', this.profile.name);
        // this.meta.setTag('og:description', this.profile.description);
        // this.meta.setTag('twitter:image', encodeURI(this.profile.profilePictureURL));
        // this.meta.setTag('twitter:title', this.profile.name);
        // this.meta.setTag('twitter:description', this.profile.description);
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }

  testUserConnected(): string {
    let text = 'Connect';
    if (this.user && this.isUserConnected) {
      text = 'Connected';
    }
    return text;
  }

  connectClicked(): void {
    if (!this.user) {
      this.toastr.error('Need login first');
      return;
    }
    if (this.user && this.isUserConnected) {
      this.toastr.success('Already connected');
    }
    if (this.user && !this.isUserConnected) {
      const data = {
        inviteeid: this.user.uid,
        invitedid: this.profile.uid,
      };
      this.spinner.show();
      this.userService.connectTofriend(data).subscribe(
        (res) => {
          console.log(res);
          this.isUserConnected = true;
          this.spinner.hide();
        },
        (error) => {
          this.spinner.hide();
          this.toastr.error('error');
        }
      );
    }
  }

  openEditModal(): void {
    this.editProfileComponent.openModal(this.profile);
  }
}
