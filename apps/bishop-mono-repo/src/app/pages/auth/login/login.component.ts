import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bf-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  private get email() {
    return this.loginForm.get("email")?.value;
  }

  private get password() {
    return this.loginForm.get("password")?.value;
  }

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });



  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    console.log('Help');

  }

  public checkLogin() {
    console.log(`email: \t ${this.email}\n Password: ${this.password}`);
  }

  public navigateTo(urlName: string) {

    let url;

    switch (urlName) {
      case 'create-account':
        url = "/auth/create-account";
        break;
      case 'forgot-password':
        url = "/auth/forgot-password";
        break;

      default:
        break;
    }

    if (url) {
      this.router.navigateByUrl(url);
    }
  }


}
