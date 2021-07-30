import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class SharedService {
  constructor(private http: HttpClient) {}

  addCommentToFeed(feedId, coment): Observable<any> {
    const url = `${environment.API_URL}/comments/${feedId}/`;
    return this.http.post(url, coment);
  }

  createPost(post): Observable<any> {
    const url = `${environment.API_URL}/posts`;
    return this.http.post(url, post);
  }

  editPost(post): Observable<any> {
    const url = `${environment.API_URL}/posts/${post.postid}`;
    return this.http.put(url, post);
  }

  deletePost(postid): Observable<any> {
    const url = `${environment.API_URL}/posts/${postid}`;
    return this.http.delete(url);
  }

  createWarning(warning): Observable<any> {
    const url = `${environment.API_URL}/posts/${warning.postid}/warning`;
    return this.http.post(url, warning);
  }

  deleteCommentFromFeed(commentId): Observable<any> {
    const url = `${environment.API_URL}/comments/${commentId}`;
    return this.http.delete(url);
  }


}
