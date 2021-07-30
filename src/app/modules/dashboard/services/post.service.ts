import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(post): Observable<any> {
    const url = `${environment.API_URL}/posts`;
    return this.http.post(url, post);
  }

  getPosts(): Observable<any> {
    const url = `${environment.API_URL}/posts`;
    return this.http.get(url);
  }

  getPostsByUserId(uid): Observable<any> {
    const url = `${environment.API_URL}/posts/users/${uid}`;
    return this.http.get(url);
  }

  getPostById(id): Observable<any> {
    const url = `${environment.API_URL}/posts/${id}`;
    return this.http.get(url);
  }

  addCommentToPost(postid, coment): Observable<any> {
    const url = `${environment.API_URL}/comment/${postid}`;
    return this.http.post(url, coment);
  }

  getLessonPosts(): Observable<any> {
    const url = `${environment.API_URL}/postsbyadmins`;
    return this.http.get(url);
  }

  editPost(post): Observable<any> {
    const url = `${environment.API_URL}/posts/${post.postid}`;
    return this.http.put(url, post);
  }

  deletePost(postid): Observable<any> {
    const url = `${environment.API_URL}/posts/${postid}`;
    return this.http.delete(url);
  }

  addMediaToPost(data): Observable<any> {
    const url = `${environment.API_URL}/posts/${data.postid}/media`;
    return this.http.post(url, data);
  }

  deleteCommentFromFeed(commentId): Observable<any> {
    const url = `${environment.API_URL}/comment/${commentId}`;
    return this.http.delete(url);
  }

}
