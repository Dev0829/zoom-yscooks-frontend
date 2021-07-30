// import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Component, OnInit, ViewChild, NgZone, Inject } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { EmailValidator } from '../../../shared/validators/email-validator';
import { EqualPasswordsValidator } from '../../../shared/validators/equal-passwords-validator';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
// import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../../models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-reg-modal',
  templateUrl: './login-reg-modal.component.html',
  styleUrls: ['./login-reg-modal.component.scss'],
})
export class LoginRegModalComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;

  public modalContent = {
    login: false,
    reg: false,
    restorePass: false,
  };
  public formLogin: FormGroup;
  public formReg: FormGroup;
  public emailLog: AbstractControl;
  public passwordLog: AbstractControl;
  public submitted = false;
  public emailReg: AbstractControl;
  public parentEmailReg: AbstractControl;
  public passwordsReg;
  public repeatPasswordReg: AbstractControl;
  public passwordReg: AbstractControl;
  public nameReg: AbstractControl;
  public companyReg: AbstractControl;
  public titleReg: AbstractControl;
  public linkedinReg: AbstractControl;
  public signInError = false;
  public resetPassError = false;
  public showCheckEmailAfterResetPass = false;
  public preloader = false;
  public emailError = false;
  public passwordError = false;
  public remember: AbstractControl;
  public agreeTerms: AbstractControl;
  public above13: AbstractControl;
  public showForm = false;
  public emailForRestore = '';
  public newUser: UserModel = {};
  public user: UserModel;
  public showParentEmail = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    // private authProviderService: AuthService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private ngZone: NgZone,
    private cookieService: CookieService
  ) {
    this.formLogin = fb.group({
      email: [
        '',
        Validators.compose([Validators.required, EmailValidator.validate]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      remember: [false],
    });

    this.formReg = fb.group({
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
      linkedin: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],

      title: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      // tslint:disable-next-line: deprecation
      passwords: fb.group(
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
    });



    this.emailLog = this.formLogin.controls.email;
    this.passwordLog = this.formLogin.controls.password;
    this.remember = this.formLogin.controls.remember;
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

  ngOnInit(): void {}

  openModal(modal: string): void {
    this.showForm = true;
    this.emailForRestore = '';
    if (modal === 'login') {
      this.modalContent = {
        login: true,
        reg: false,
        restorePass: false,
      };
    } else if (modal === 'reg') {
      this.modalContent = {
        login: false,
        reg: true,
        restorePass: false,
      };
    }
    this.modal.show();
  }

  showRegister(): void {
    this.modalContent = {
      login: false,
      reg: true,
      restorePass: false,
    };
  }

  showLogin(): void {
    this.modalContent = {
      login: true,
      reg: false,
      restorePass: false,
    };
  }

  onSubmitLogin(values: any): void {
    this.preloader = true;
    this.submitted = true;
    if (this.formLogin.valid) {
      this.spinner.show();
      const auth = {
        password: values.password,
        email: values.email.toLocaleLowerCase(),
      };
      this.login(auth);
    }
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
      this.newUser.linkedin = values.passwords.linkedin;
      this.authService.register(this.newUser).subscribe(
        (data) => {
          this.login(this.newUser);
        },
        (error) => {
          this.spinner.hide();
          this.toastr.error('Error!');
        }
      );
    }
    this.spinner.hide();
  }

  showRestorePassword(): void {
    this.modalContent = {
      login: false,
      reg: false,
      restorePass: true,
    };
  }

  restorePassword(): void {
    this.authService
      .resetPasswordSendEmail({ email: this.emailForRestore })
      .subscribe(
        (res) => {
          this.toastr.success('Please check your email');
          this.modal.hide();
        },
        (error) => {
          this.toastr.error('Email not registered');
        }
      );
  }

  login(auth): void {
    this.spinner.show();
    this.authService.login(auth).subscribe(
      (res: any) => {
        if (res && res.token) {
          this.cookieService.set('token', res.token);
          this.cookieService.set('userProfile', JSON.stringify(res));
          this.router.navigate(['/dashboard']);
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
