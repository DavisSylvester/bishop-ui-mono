import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bf-auth-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  showForgotPasswordComponent = true;
  showOtpComponent = false;
  otpEmailAddress =  '';


  private get email() {
    return this.forgotPasswordForm.get("email")?.value;
  }

  private get otpCode() {
    return this.forgotPasswordForm.get("email")?.value;
  }

  public forgotPasswordForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  public otpCodeForm: FormGroup = this.fb.group({
    codeOne: ['', []],
    codeTwo: ['', []],
    codeThree: ['', []],
    codeFour: ['', []],
    codeFive: ['', []],
    codeSix: ['', []],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  public navigateTo() {}
  public checkOTP() {
    this.toggleComponents();
  }
  public resendOTP() {}
  public cancelOTP() {
    this.toggleComponents();
  }
  public onKeyUpChange(event: KeyboardEvent) {
    console.log(event);
  //   // let event = $event as HTMLInputElement
  //   let element: HTMLElement;

  //  if (event.code !== 'Backspace') {
  //   // element = event.
  //  }


  //   if (event.code === 'Backspace')
  //       element = event.target.;

  //   if(!element!) {
  //       return;
  //   }
  //   else{
  //       element.focus();
  //   }
  }

  private toggleComponents() {
    this.showForgotPasswordComponent = !this.showForgotPasswordComponent;
    this.showOtpComponent = !this.showOtpComponent;
  }
}
