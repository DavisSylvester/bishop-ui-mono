import { Injectable } from "@angular/core";
import { HttpInterceptor as HI, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Observable, catchError, map, throwError } from "rxjs";
import { AppStore } from "../../store/interfaces/AppStore";
import { Store } from "@ngrx/store";
import * as AppActions from "../../store/actions/app/app-actions";

@Injectable()

export class HttpInterceptor implements HI {

  constructor(private store: Store<AppStore>) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Inside Interceptors');
    // console.log('url', request.url);
    this.store.dispatch(AppActions.fetchingData());
    const customReq = request.clone({
      ...request

    });
    return next.handle(customReq).pipe(

      map((x) => {
        // console.log('Inside map');
        // console.log(x);
        if (x instanceof HttpRequest) {
          // this.store.dispatch(AppActions.fetchingData());
        }


        // console.log(this.store.select);

        if (x instanceof HttpResponse<unknown>) {
          this.store.dispatch(AppActions.fetchingDataSuccess());
          console.log('I got response')
          return x;
        }
        return x;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('Inside Catch Error')
        this.store.dispatch(AppActions.fetchingDataFailed());
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('This is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      }));
  }
}
