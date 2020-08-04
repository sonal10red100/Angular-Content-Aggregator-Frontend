import { Injectable } from '@angular/core';
import { VotePayload } from './vote-payload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  vote(votePayload: VotePayload): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/votes/', votePayload);
  }
}
