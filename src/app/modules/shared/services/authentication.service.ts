import { CookieService } from 'ngx-cookie-service';
import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable()
export class AuthenticationService {
  private interruptedUrl: string;

  constructor(private cookieService: CookieService, private http: HttpClient) {}

  public isAuthorized(): boolean {
    const isAuthorized: boolean = !!this.cookieService.get('token');

    return isAuthorized;
  }

  register(user): Observable<any> {
    const url = `${environment.API_URL}/users/register`;
    return this.http.post(url, user);
  }

  login(auth): Observable<UserModel> {
    const url = `${environment.API_URL}/users/login`;
    return this.http.post(url, auth);
  }

  getUserProfile(): Observable<any> {
    const token = this.cookieService.get('token');
    const url = `${environment.API_URL}/users/me`;
    return this.http.get(url, {
      headers: new HttpHeaders().set('X-Auth-Token', token),
    });
  }

  logout(): void {
    this.cookieService.deleteAll();
    // this.router.navigate(['/']);
  }

  resetPasswordSendEmail(data): Observable<any> {
    const url = `${environment.API_URL}/users/sendemailtorespass`;
    return this.http.post(url, data);
  }

  resetPassword(data): Observable<any> {
    const url = `${environment.API_URL}/users/resetpass`;
    return this.http.post(url, data);
  }
}
