import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public $loginCalled = new Subject<any>();
  public $signUpCalled = new Subject<any>();
  public $calSignUpGiftCalled = new Subject<any>();

  constructor() { }

  callLoginForm() {
    this.$loginCalled.next();
  }

  calSignUp() {
    this.$signUpCalled.next();
  }

  calSignUpGift() {
    this.$calSignUpGiftCalled.next();
  }
}
