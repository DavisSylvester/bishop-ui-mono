import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bf-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

   private get email() {
    return this.createAccountForm.get("email")?.value;
  }

  private get password() {
    return this.createAccountForm.get("password")?.value;
  }

  constructor(private fb: FormBuilder, private router: Router) {

  }

  public createAccountForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],

  });

  public createAccount() {

  }
}
