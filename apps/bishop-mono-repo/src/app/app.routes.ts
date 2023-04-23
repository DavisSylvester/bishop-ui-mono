import { Route } from '@angular/router';
import { AuthPageComponent } from './pages/auth/auth-page/auth-page.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/auth/login/login.component';

export const appRoutes: Route[] = [
  {
    path: "auth",
    component: AuthPageComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},     
      {
        path: 'login',
        component: LoginComponent
      },
      {
    path: "forgot-password",
    component: ForgotPasswordComponent
  }
    ]
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];
