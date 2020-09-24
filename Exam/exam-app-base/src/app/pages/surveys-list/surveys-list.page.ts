import { Component, OnInit } from '@angular/core';

import { SurveyBase, SurveyRow } from 'src/app/shared/models';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SurveysService } from 'src/app/shared/services/surveys.service';

@Component({
  selector: 'app-surveys-list',
  templateUrl: './surveys-list.page.html',
  styleUrls: ['./surveys-list.page.scss']
})
export class SurveysListPage implements OnInit {
  public loading : boolean = false;
  public errorLoadSurveys: boolean = false;
  constructor(private authService: AuthService, public surveysService: SurveysService) {}

  public ngOnInit(): void {
    this.loadSurveys(); // It's the correct position of call? https://ionicframework.com/docs/angular/lifecycle
  }

  private loadSurveys(): void {
    this.loading = true
    this.errorLoadSurveys = false;
    this.surveysService.getSurveys().subscribe(
      (surveys: SurveyRow[]) => {
        this.loading = false;
        this.errorLoadSurveys =false;
        this.surveysService.surveys = surveys;
      },
      (error) => {
        this.loading=false;
        this.errorLoadSurveys = true;
        this.loadSurveys();
      }
    );
  }

  public logout(): void {
    this.authService.logout();
  }
}
