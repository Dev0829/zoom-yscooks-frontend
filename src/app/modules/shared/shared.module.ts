import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginRegModalComponent } from './components/login-reg-modal/login-reg-modal.component';
import { AuthenticationService } from './services/authentication.service';
import { FileUploadModule } from 'ng2-file-upload';

import { ToastrModule } from 'ngx-toastr';
import { SharedService } from './services/shared.service';
import { FooterComponent } from './components/footer/footer.component';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { ImagePreviewDirective } from './directives/image-preview.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthGuard } from './services/auth-guard.service';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { GroupsService } from './services/groups.service';
import { SafeUrlPipe } from './directives/safe-url.pipe';
import { FeedGridComponent } from './components/feed-grid/feed-grid.component';
import { DeletePostComponent } from './components/delete-post/delete-post.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  providers: [
    CookieService,
    AuthenticationService,
    SharedService,
    GroupsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
    AuthGuard,
  ],
  declarations: [
    HeaderComponent,
    LoginRegModalComponent,
    FooterComponent,
    ImagePreviewDirective,
    SafeUrlPipe,
    FeedGridComponent,
    DeletePostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    RouterModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    NgxSpinnerModule,
    FileUploadModule,
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    QuillModule.forRoot({
      modules: {
        toolbar: {
          container: [
            ['bold', 'italic', 'underline'], // toggled buttons
            ['blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ align: [] }],
            ['emoji'],
          ],
        },
        'emoji-shortname': true,
        'emoji-textarea': false,
        'emoji-toolbar': true,
      },
    }),

  ],
  exports: [
    HeaderComponent,
    LoginRegModalComponent,
    FooterComponent,
    ImagePreviewDirective,
    SafeUrlPipe,
    FeedGridComponent,
    DeletePostComponent
  ],
})
export class SharedModule {}


