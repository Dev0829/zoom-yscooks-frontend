import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class GroupsService {
  constructor(private http: HttpClient) {}

  getAllGroups(): Observable<any> {
    const url = `${environment.API_URL}/groups`;
    return this.http.get(url);
  }

  getGroupPosts(groupId): Observable<any> {
    const url = `${environment.API_URL}/groups/${groupId}`;
    return this.http.get(url);
  }
}
