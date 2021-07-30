import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ZoomService {

  constructor(private http: HttpClient) {}

  getSignature(zoomData): Observable<any> {
    const url = `${environment.API_URL}/users/zoom/signature`;
    return this.http.post(url, zoomData);
  }

  addCommentToZoom(zoomId, comment): Observable<any> {
    const url = `${environment.API_URL}/zoom-comments/${zoomId}/`;
    return this.http.post(url, comment);
  }

  getCommentsByZoomId(zoomId): Observable<any> {
    const url = `${environment.API_URL}/zoom-comments/${zoomId}/`;
    return this.http.get(url);
  }

  deleteCommentFromZoom(commentId): Observable<any> {
    const url = `${environment.API_URL}/zoom-comments/${commentId}`;
    return this.http.delete(url);
  }


}
