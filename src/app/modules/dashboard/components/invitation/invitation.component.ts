import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { EmailValidator } from "../../../shared/validators/email-validator";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { GoogleAuthService, GoogleApiService } from "ng-gapi";
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;
import { environment } from "../../../../../environments/environment";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-modal-invitation",
  templateUrl: "./invitation.component.html",
  styleUrls: ["./invitation.component.scss"],
})
export class InvitationComponent implements OnInit, AfterViewInit {
  @ViewChild("modal") modal: ModalDirective;

  public invitationForm: FormGroup;
  public email: AbstractControl;
  public emailsFromGoogle = [];
  public useGmail = false;

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private gapiService: GoogleApiService,
    private googleAuth: GoogleAuthService,
    private userService: UserService
  ) {
    gapiService.onLoad().subscribe((data) => {
      // Here we can use gapi
      // console.log(data);
    });
    this.invitationForm = fb.group({
      email: [
        "",
        Validators.compose([Validators.required, EmailValidator.validate]),
      ],
    });

    this.email = this.invitationForm.controls.email;
  }

  ngOnInit() {
    this.gapiService.onLoad().subscribe((data) => {
      // Here we can use gapi
      // console.log(data);
    });
  }

  ngAfterViewInit() {
    // tslint:disable-next-line:no-unused-expression
    // this.window.FB;
    // console.log(this.data);
  }

  openInvitationModal() {
    this.modal.show();
    const config = {
      client_id: environment.API_GOOGLE,
      scope: "https://www.googleapis.com/auth/contacts.readonly",
    };
    // gapi.auth2.init(config);
    gapi.auth2.getAuthInstance();
  }

  onSubmit(value) {
    console.log(value);
    if (this.invitationForm.valid) {
      this.spinner.show();
      this.userService.sendInvitation([value.email]).subscribe(
        (data) => {
          // console.log(data);
          this.modal.hide();
          this.spinner.hide();
          this.toastr.success("User invited");
        },
        (error) => {
          this.spinner.hide();
          this.toastr.error("Error");
        }
      );
    }
  }

  async getConstactsFromGoogle() {
    try {
      this.googleAuth.getAuth().subscribe(async (auth) => {
        try {
          const user: GoogleUser = await auth.signIn();
          console.log(user.getAuthResponse(true));
          const token = `Bearer ${user.getAuthResponse(true).access_token}`;
          const googleContacts = await this.userService
            .getGoogleContacts(token)
            .toPromise();
          const contacts = [];
          const data = googleContacts.feed.entry;
          for (let i = 0; data.length > i; i++) {
            if (data[i].gd$email) {
              const emails = data[i].gd$email;
              // tslint:disable-next-line: no-conditional-assignment
              for (let j = 0, email; (email = emails[j]); j++) {
                contacts.push({ email: email.address, invite: true });
              }
            }
          }
          this.emailsFromGoogle = contacts;
          this.useGmail = true;
        } catch (e) {
          console.log(e);

          this.toastr.error("Error");
        }
      });
    } catch (e) {
      console.log(e);

      this.toastr.error("Error");
    }
  }

  inviteFromGmail() {
    // this.spinner.show();
    const emails = [];
    this.emailsFromGoogle
      .filter((e) => e.invite)
      .forEach((d) => {
        emails.push(d.email);
      });
    console.log(emails);
    this.userService.sendInvitation(emails).subscribe(
      (data) => {
        // console.log(data);
        this.modal.hide();
        this.spinner.hide();
        this.toastr.success("Users invited");
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error("Error");
      }
    );
  }
}
