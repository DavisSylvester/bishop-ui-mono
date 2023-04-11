import { Injectable } from "@angular/core";
import { HttpInterceptor as HI, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppStore } from "../../store/interfaces/AppStore";
import { Store } from "@ngrx/store";
import * as AppActions from "../../store/actions/app/app-actions";

@Injectable()

export class HttpInterceptor implements HI {

  constructor(private store: Store<AppStore>) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Inside Interceptors');
    
    this.store.dispatch(AppActions.fetchingData());
    const customReq = request.clone({


    });
    return next.handle(customReq);
  }
}
