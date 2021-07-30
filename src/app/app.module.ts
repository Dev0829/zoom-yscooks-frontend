import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ZoomModule } from './modules/zoom/zoom.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxSpinnerModule,
    ZoomModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
