import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommentPayload } from './comment-payload';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    return this.http.get<CommentPayload[]>('http://localhost:8080/api/comments/by-post/' + postId);
  }

  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/comments/', commentPayload);
  }

  getAllCommentsByUser(name: string) {
    return this.http.get<CommentPayload[]>('http://localhost:8080/api/comments/by-user/' + name);
  }
}
