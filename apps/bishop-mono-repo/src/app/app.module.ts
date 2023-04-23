import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from '../store/reducers/app/app-reducer';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BishopAngularMaterialModule } from "libs/bishop-angular-material/src/index"
import { HttpInterceptor } from '../services/interceptors/http-interceptor';
import { AuthPageComponent } from './pages/auth/auth-page/auth-page.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';


@NgModule({
  declarations: [AppComponent, AuthPageComponent, LoginComponent, ForgotPasswordComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot({
      App: appReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    BishopAngularMaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
