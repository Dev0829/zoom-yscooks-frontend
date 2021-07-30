import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/services/auth-guard.service';

import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { AllGroupsComponent } from './components/all-groups/all-groups.component';
import { PostsComponent } from './components/posts/posts.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { AttendeesComponent } from './components/attendees/attendees.component';
import { JoinToConferenceComponent } from './components/join-to-conference/join-to-conference.component';
import { VideosComponent } from './components/videos/videos.component';


const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: UserDashboardComponent,
        canActivate: [AuthGuard],
        data: {
          search: false,
          home: false,
          login: false,
          logout: true,
          profile: false,
          lessons: true,
          zoom: false,
        },
      }
    ],
  },
  {
    path: 'profile/:id',
    component: ProfileViewComponent,
    data: {
      search: true,
      home: true,
      login: true,
      dashboard: true,
      register: true,
      logout: true,
    },
  },
  {
    path: 'groups',
    component: AllGroupsComponent,
    data: {
      search: true,
      login: true,
      register: true,
      logout: true,
      dashboard: true,
    },
  },
  {
    path: 'groups/:id',
    component: GroupDetailComponent,
    data: {
      search: true,
      login: true,
      register: true,
      logout: true,
      dashboard: true,
    },
  },
  {
    path: 'posts',
    component: PostsComponent,
    data: {
      search: true,
      login: true,
      register: true,
      logout: true,
      dashboard: true,
    },
  },
  {
    path: 'posts/:id',
    component: PostViewComponent,
    data: {
      search: true,
      login: true,
      register: true,
      logout: true,
      dashboard: true,
    },
  },
  {
    path: 'attendees',
    component: AttendeesComponent,
    data: {
      search: true,
      login: true,
      register: true,
      logout: true,
      dashboard: true,
    },
  },
  {
    path: 'join-to-conference',
    component: JoinToConferenceComponent,
    data: {
      search: true,
      login: true,
      register: true,
      logout: true,
      dashboard: true,
    },
  },
  {
    path: 'videos/:id',
    component: VideosComponent,
    canActivate: [AuthGuard],
    data: {
      search: false,
      home: true,
      login: false,
      logout: true,
      profile: false,
      lessons: true,
      zoom: false,
      dashboard: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
