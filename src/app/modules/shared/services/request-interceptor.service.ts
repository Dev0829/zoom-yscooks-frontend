import { CookieService } from 'ngx-cookie-service';
import { Injectable, Injector, Inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import {
  Observable,
  Subject,
  BehaviorSubject,
  asapScheduler,
  pipe,
  of,
  from,
  interval,
  merge,
  fromEvent,
  SubscriptionLike,
  PartialObserver
} from 'rxjs';
import { map, filter, scan, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
  isRefreshingToken = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private cookieService: CookieService,
    private injector: Injector,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      request.url !==
      'https://www.google.com/m8/feeds/contacts/default/full?alt=json&max-results=9999999'
    ) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.cookieService.get('token')}` || ''
        }
      });
    }

    // return next.handle(request);
    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            // console.log(' all looks good');
            // // http response status code
            // console.log(event.status);
          }
        },
        error => {
          // http response status code
          console.log('----response----');
          console.error('status code:');
          console.error(error.status);
          console.error(error.message);
          console.log('--- end of response---');
          if (error.status === 401) {
            console.log('logout');
            this.cookieService.deleteAll();
            // this.router.navigate(['/']);
          }
        }
      )
    );
  }
}
