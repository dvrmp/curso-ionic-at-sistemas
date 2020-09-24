import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SurveyRow } from 'src/app/shared/models';
import { SurveysService } from 'src/app/shared/services/surveys.service';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.page.html',
  styleUrls: ['./survey-detail.page.scss'],
})
export class SurveyDetailPage implements OnInit {

  public survey : SurveyRow;
  public loading: boolean = false;

  constructor(
    private routerActived: ActivatedRoute,
    private surveyService:SurveysService,
    private toastController:ToastController,
    private router:Router) {
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.routerActived.snapshot.paramMap.get('id')
    this.loading = true
    this.surveyService.getSurvey(parseInt(this.routerActived.snapshot.paramMap.get('id')))
    .subscribe(
      (survey:SurveyRow)=>{
        this.loading = false;
        this.survey = survey;
      },
      ()=>{
        this.loading = false;
        this.showMessage('An error ocurried');
        this.router.navigate(['surveys-list']);
      }
    )
    if(this.survey?.answered){
      console.log(this.survey);
      this.surveyService.getSurveysUpdates().subscribe(
        (response)=>{
          console.log(response);
        }
      )
    }
  }

  public addSurvey(idOption:number):void{
    this.surveyService.postSurveys(this.survey.id,idOption).subscribe(
      ()=>{
        this.loading = false;
        this.surveyService.surveys.find((survey)=>survey.id===this.survey.id).answered=true;
        this.router.navigate(['surveys-list']);
      },
      ()=>{
        this.loading = false;
        this.showMessage('An error ocurried');
      }
    );
  }

  public deleteSurvey(){
    this.surveyService.deleteSurvey(this.survey.id).subscribe(
      (message)=>{
       this.showMessage('Respuesta retractada'); //TEMP
       this.survey.answered = false;
       this.surveyService.surveys.find((survey)=>survey.id===this.survey.id).answered=false;
      },
      ()=>{
        this.showMessage('An error ocurried');
      }
    )
  }

  private async showMessage(message:string):Promise<void>{
    //TODO transalateService.instant
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  

}
