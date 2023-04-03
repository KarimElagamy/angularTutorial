import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIKeyAdderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const subscriptionKey = "722ae8bcf2aa4d2e970edbc0306041fd";
    return next.handle(request.clone({
      headers: request.headers.set('Ocp-Apim-Subscription-Key', subscriptionKey)
    }));
  }
}
