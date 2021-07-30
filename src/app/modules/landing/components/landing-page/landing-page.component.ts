import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginRegModalComponent } from '../../../shared/components/login-reg-modal/login-reg-modal.component';
import { CookieService } from 'ngx-cookie-service';
import { UserModel } from '../../../shared/models/user.model';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { EmailValidator } from '../../../shared/validators/email-validator';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { EqualPasswordsValidator } from '../../../shared/validators/equal-passwords-validator';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  @ViewChild(LoginRegModalComponent)
  loginRegModalComponent: LoginRegModalComponent;

  public formReg: FormGroup;
  public emailReg: AbstractControl;
  public parentEmailReg: AbstractControl;
  public passwordsReg;
  public repeatPasswordReg: AbstractControl;
  public linkedinReg: AbstractControl;
  public passwordReg: AbstractControl;
  public nameReg: AbstractControl;
  public companyReg: AbstractControl;
  public titleReg: AbstractControl;
  public signInError = false;
  public emailError = false;
  public passwordError = false;
  public remember: AbstractControl;
  public agreeTerms: AbstractControl;
  public submitted = false;
  public preloader = false;

  public formLogin: FormGroup;

  public user: UserModel;
  public newUser: UserModel = {};

  constructor(
     public fb: FormBuilder,
     private router: Router,
     private authService: AuthenticationService,
     private spinner: NgxSpinnerService,
     private toastr: ToastrService,
     private cookieService: CookieService
) {}

  ngOnInit(): void {
    if (this.cookieService.get('userProfile')) {
      this.user = JSON.parse(this.cookieService.get('userProfile'));
    }

    this.formReg = this.fb.group({
      email: [
        '',
        Validators.compose([Validators.required, EmailValidator.validate]),
      ],
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      company: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      title: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      linkedin: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      // tslint:disable-next-line: deprecation
      passwords: this.fb.group(
        {
          password: [
            '',
            Validators.compose([Validators.required, Validators.minLength(4)]),
          ],
          repeatPassword: [
            '',
            Validators.compose([Validators.required, Validators.minLength(4)]),
          ],
        },
        {
          validator: EqualPasswordsValidator.validate(
            'password',
            'repeatPassword'
          ),
        }
      ),
      agreeTerms: [false],
      above13: [false],
    });



    this.agreeTerms = this.formReg.controls.agreeTerms;
    this.emailReg = this.formReg.controls.email;
    this.linkedinReg = this.formReg.controls.linkedin;
    this.passwordsReg = this.formReg.controls.passwords;
    this.passwordReg = this.passwordsReg.controls.password;
    this.repeatPasswordReg = this.passwordsReg.controls.repeatPassword;
    this.nameReg = this.formReg.controls.name;
    this.companyReg = this.formReg.controls.company;
    this.titleReg = this.formReg.controls.title;

  }

  openLogRegModal(modal): void {
    this.loginRegModalComponent.openModal(modal);
  }

  onSubmitReg(values: any): void {
    this.preloader = true;
    this.submitted = true;
    this.spinner.show();

    if (values.email && values.name && values.passwords.password) {
      this.newUser.email = values.email.toLocaleLowerCase();
      this.newUser.name = values.name;
      this.newUser.title = values.title;
      this.newUser.company = values.company;
      this.newUser.password = values.passwords.password;
      this.newUser.linkedin = values.linkedin;
      // tslint:disable-next-line: deprecation
      this.authService.register(this.newUser).subscribe(
        (data) => {
          this.login(this.newUser);
        },
        (e) => {
          this.spinner.hide();
          this.toastr.error(e?.error?.message, 'Error!');
        }
      );
    }
    this.spinner.hide();
  }

  login(auth): void {
    this.spinner.show();
    // tslint:disable-next-line: deprecation
    this.authService.login(auth).subscribe(
      (res: any) => {
        if (res && res.token) {
          this.cookieService.set('token', res.token);
          this.cookieService.set('userProfile', JSON.stringify(res));
          this.router.navigate(['/payments/select']);
        } else {
          this.toastr.error('Could not login, please verify your credentials!');
        }
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('Could not login, please verify your credentials!');
      }
     );
  }
}
