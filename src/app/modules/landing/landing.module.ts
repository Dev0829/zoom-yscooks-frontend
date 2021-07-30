import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingRoutingModule } from './landing-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from '../shared/shared.module';
import { LandingService } from './landing.service';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PrivacyPoliceComponent } from './components/privacy-police/privacy-police.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SummitComponent } from './components/2021-summit/2021-summit.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PodcastComponent } from './components/podcast/podcast.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    PopoverModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [LandingService, CookieService],
  declarations: [
    LandingPageComponent,
    PrivacyPoliceComponent,
    TermsOfUseComponent,
    ResetPasswordComponent,
    PaymentComponent,
    SummitComponent,
    PodcastComponent
  ],
})
export class LandingModule {}
