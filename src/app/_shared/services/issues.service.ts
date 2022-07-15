import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IssuesRequest, IssuesResponse } from '../models/issue.model';

@Injectable({ providedIn: 'root' })
export class IssuesService {
  constructor(private http: HttpClient) {}

  get(request: IssuesRequest): Observable<IssuesResponse> {
    const params = new HttpParams()
            .append('boardId', request.boardId.toString());
    
    return this.http.get<IssuesResponse>(
            `${environment.jira.url}/api/issues`,
            { params });
  }
}