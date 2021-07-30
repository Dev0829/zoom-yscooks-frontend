import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PrivacyPoliceComponent } from './components/privacy-police/privacy-police.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SummitComponent } from './components/2021-summit/2021-summit.component';
import { PodcastComponent } from './components/podcast/podcast.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {
      login: true,
      dashboard: true,
      register: true,
      logout: true,
    },
  },
  {
    path: 'privacy',
    component: PrivacyPoliceComponent,
    data: {
      login: true,
      dashboard: true,
      register: true,
      logout: true
    },
  },
  {
    path: 'terms',
    component: TermsOfUseComponent,
    data: {
      login: true,
      dashboard: true,
      register: true,
      logout: true
    },
  },
  {
    path: 'resetpass',
    component: ResetPasswordComponent,
    data: {
      login: true,
      dashboard: true,
      register: true,
      logout: true
    },
  },
  {
    path: 'payments/:status',
    component: PaymentComponent,
    data: {
      login: true,
      dashboard: true,
      register: false,
      logout: true
    },
  },
  {
    path: '2021-summit',
    component: SummitComponent,
    data: {
      login: true,
      dashboard: true,
      register: true,
      logout: true
    },
  },
    {
      path: '2021-Summit',
      component: SummitComponent,
      data: {
        login: true,
        dashboard: true,
        register: true,
        logout: true
      },
  },
  {
    path: 'podcast',
    component: PodcastComponent,
    data: {
      login: true,
      dashboard: true,
      register: true,
      logout: true,
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
