import {
  Component,
  OnInit,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GroupsService } from '../../../shared/services/groups.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { LoginRegModalComponent } from '../../../shared/components/login-reg-modal/login-reg-modal.component';
import { UserModel } from '../../../shared/models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss'],
})
export class GroupDetailComponent implements OnInit, AfterViewInit {
  @ViewChild(LoginRegModalComponent)
  loginRegModalComponent: LoginRegModalComponent;

  @Output() groupFeed = [];
  @Output() groupMembers = [];
  @Output() groupId;
  public userProfile: UserModel;
  public paginator = {
    total: 0,
    itemPerPage: 17,
    page: 1,
  };
  private allPosts = [];

  constructor(
    private groupsService: GroupsService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    if (this.cookieService.get('userProfile')) {
      this.userProfile = JSON.parse(this.cookieService.get('userProfile'));
    }
    this.route.params.subscribe((data) => {
      this.groupId = data.id;
      this.getGroupPosts(data.id);
    });
  }
  ngAfterViewInit() {
    // if (!this.authenticationService.isAuthorized()) {
    //   setTimeout(() => this.loginRegModalComponent.openModal('join', null), 1000);
    // }
  }

  getGroupPosts(groupId) {
    this.spinner.show();
    this.groupsService.getGroupPosts(groupId).subscribe(
      (data: any) => {
        console.log(data);
        if (data) {

        this.allPosts = data;
        this.paginator.total = data.length;
        const start = (this.paginator.page - 1) * this.paginator.itemPerPage;
        this.groupFeed = this.allPosts.slice(
          start,
          this.paginator.itemPerPage * this.paginator.page
        );
      }

        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('Error');
      }
    );
  }

  pageChanged(event: any): void {
    console.log(event);
    this.paginator.page = event.page;
    const start = (this.paginator.page - 1) * this.paginator.itemPerPage;
    this.groupFeed = this.allPosts.slice(
      start,
      this.paginator.itemPerPage * this.paginator.page
    );
    window.scrollTo(0, 10);
  }
}
