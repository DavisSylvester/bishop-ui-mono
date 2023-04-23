import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bf-auth-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  private get email() {
    return this.forgotPasswordForm.get("email")?.value;
  }

  public forgotPasswordForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    
  });

  constructor(private fb: FormBuilder, private router: Router) {}
  
  public navigateTo() {}
  public checkOTP() {}
}
