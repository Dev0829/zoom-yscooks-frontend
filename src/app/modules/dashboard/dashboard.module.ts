import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserService } from './services/user.service';
import { RequestInterceptorService } from '../shared/services/request-interceptor.service';
import { PostService } from './services/post.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { InvitationComponent } from './components/invitation/invitation.component';
import {
  GoogleApiModule,
  GoogleApiService,
  GoogleAuthService,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
  GoogleApiConfig,
} from 'ng-gapi';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AllGroupsComponent } from './components/all-groups/all-groups.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PostsComponent } from './components/posts/posts.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { AttendeesComponent } from './components/attendees/attendees.component';
import { JoinToConferenceComponent } from './components/join-to-conference/join-to-conference.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { VideosComponent } from './components/videos/videos.component';

const gapiClientConfig: NgGapiClientConfig = {
  client_id: environment.API_GOOGLE,
  discoveryDocs: [
    'https://analyticsreporting.googleapis.com/$discovery/rest?version=v4',
  ],
  scope: [
    'https://www.googleapis.com/auth/analytics.readonly',
    'https://www.googleapis.com/auth/analytics',
    'https://www.googleapis.com/auth/contacts.readonly',
  ].join(' '),
};

@NgModule({
  declarations: [
    UserDashboardComponent,
    ProfileViewComponent,
    EditProfileComponent,
    InvitationComponent,
    AllGroupsComponent,
    PostsComponent,
    GroupDetailComponent,
    PostViewComponent,
    AttendeesComponent,
    JoinToConferenceComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig,
    }),
    NgCircleProgressModule.forRoot(),
    PopoverModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
    CookieService,
    UserService,
    PostService
  ],
})
export class DashboardModule {}
