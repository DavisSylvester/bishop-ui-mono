import { Route } from '@angular/router';
import { AuthPageComponent } from './pages/auth/auth-page/auth-page.component';

export const appRoutes: Route[] = [
  {
    path: "auth",
    component: AuthPageComponent
  }
];
