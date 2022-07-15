import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProjectBoardResponse } from '../models/board.model';

@Injectable({ providedIn: 'root' })
export class BoardsService {
  constructor(private http: HttpClient) {}

  getProjectBoards(): Observable<ProjectBoardResponse> {
    return this.http.get<ProjectBoardResponse>(`${environment.jira.url}/api/boards`);
  }
}