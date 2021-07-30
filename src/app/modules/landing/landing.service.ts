import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LandingService {
  constructor(private cookieService: CookieService, private http: HttpClient) {}

  register(user): Observable<any> {
    const url = `${environment.API_URL}/auth/register`;
    return this.http.post(url, user);
  }

  login(auth): Observable<any> {
    const url = `${environment.API_URL}/auth/login`;
    return this.http.post(url, auth);
  }

  getUserProfile(): Observable<any> {
    const token = this.cookieService.get('token');
    const url = `${environment.API_URL}/api/users/profile`;
    return this.http.get(url, {
      headers: new HttpHeaders().set('X-Auth-Token', token),
    });
  }

  updateUserProfile(data): Observable<any> {
    const token = this.cookieService.get('token');
    const url = `${environment.API_URL}/api/users/profile`;
    return this.http.put(url, data, {
      headers: new HttpHeaders().set('X-Auth-Token', token),
    });
  }

  sengGiftToUser(): Observable<any> {
    const url = `${environment.API_URL}/sendgift`;
    return this.http.get(url);
  }

  approveUser(data): Observable<any> {
    const url = `${environment.API_URL}/users/approve`;
    return this.http.post(url, data);
  }

  checkUserIsPayed(uid): Observable<any> {
    const url = `${environment.API_URL}/payments/check/${uid}`;
    return this.http.get(url);
  }

  getRssFeedData(): Observable<any> {
    const url = `${environment.API_URL}/posts/podcast`;
    return this.http.get(url);
  }
}
