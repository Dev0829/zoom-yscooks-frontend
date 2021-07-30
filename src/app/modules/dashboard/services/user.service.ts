import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<any> {
    const url = `${environment.API_URL}/users/me`;
    return this.http.get(url);
  }

  getUserById(id): Observable<any> {
    const url = `${environment.API_URL}/users/${id}`;
    return this.http.get(url);
  }

  editCurrentUser(profile): Observable<any> {
    const url = `${environment.API_URL}/users/me`;
    return this.http.put(url, profile);
  }

  sendInvitation(arr): Observable<any> {
    const url = `${environment.API_URL}/users/invitebyemail`;
    return this.http.post(url, { emails: arr });
  }

  getGoogleContacts(token): Observable<any> {
    const url =
      'https://www.google.com/m8/feeds/contacts/default/full?alt=json&max-results=9999999';
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token),
    });
  }

  connectTofriend(obj): Observable<any> {
    const url = `${environment.API_URL}/users/invitefriend`;
    return this.http.post(url, obj);
  }

  chechIsUserConnected(invitedid): Observable<any> {
    const url = `${environment.API_URL}/users/isinvitedid/${invitedid}`;
    return this.http.get(url);
  }

  getInviteeidByUserId(uid): Observable<any> {
    const url = `${environment.API_URL}/users/inviteeid/${uid}`;
    return this.http.get(url);
  }

  checkUserIsPayed(uid) {
    const url = `${environment.API_URL}/payments/check/${uid}`;
    return this.http.get(url);
  }

  getAllUsers() {
    const url = `${environment.API_URL}/users`;
    return this.http.get(url);
  }
}
