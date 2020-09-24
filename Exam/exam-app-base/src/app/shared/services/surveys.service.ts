import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

import { SurveyRow, SurveyBase } from '../models';
import { AuthService } from './auth.service';
import { ROUTES } from 'src/environments/routes';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {
  public surveys : SurveyRow[] = [];

  constructor(private authService: AuthService, private http: HttpClient) {}

  public deleteSurvey(id:number): Observable<string> {
    return this.http.delete<string>(ROUTES.SURVEY+'/'+id,{ headers: this.authService.getAuthHeaders()});
  }
  public postSurveys(id:number,idOption:number): Observable<string> {
    return this.http.post<string>(ROUTES.SURVEY+'/'+id,{option:idOption},{ headers: this.authService.getAuthHeaders()});
  }
  
  public getSurveys(): Observable<SurveyRow[]> {
    return this.http.get<SurveyRow[]>(ROUTES.SURVEY, { headers: this.authService.getAuthHeaders() });
  }
  public getSurvey(id:number): Observable<SurveyRow> {
    return this.http.get<SurveyRow>(ROUTES.SURVEY+'/'+id, { headers: this.authService.getAuthHeaders() }).pipe();
  }

  public getSurveysUpdates(): Subject<SurveyBase[]> {
    return webSocket('ws://207.154.215.142:3030/votes');
  }
}
