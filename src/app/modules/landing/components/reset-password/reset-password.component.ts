import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { EmailValidator } from '../../../shared/validators/email-validator';
import { EqualPasswordsValidator } from '../../../shared/validators/equal-passwords-validator';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  public form: FormGroup;
  public passwords;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public reserToken = '';
  public passwodChanged = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private authServise: AuthenticationService
  ) {
    this.form = fb.group({
      passwords: fb.group(
        {
          password: [
            '',
            Validators.compose([Validators.required, Validators.minLength(5)]),
          ],
          repeatPassword: [
            '',
            Validators.compose([Validators.required, Validators.minLength(5)]),
          ],
        },
        {
          validator: EqualPasswordsValidator.validate(
            'password',
            'repeatPassword'
          ),
        }
      ),
    });
    this.passwords = this.form.controls.passwords;
    this.password = this.passwords.controls.password;
    this.repeatPassword = this.passwords.controls.repeatPassword;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      // console.log(data);
      if (data && data.token) {
        this.reserToken = data.token;
      } else {
        this.toastr.error('Wrong token!');
      }
    });
  }

  onSubmit(values): void {
    const data = {
      password: values.passwords.password,
      passResetToken: this.reserToken,
    };
    this.spinner.show();
    this.authServise.resetPassword(data).subscribe(
      (res) => {
        this.spinner.hide();
        this.passwodChanged = true;
        this.toastr.success('Password changed');
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('Password not changed');
      }
    );
  }
}
