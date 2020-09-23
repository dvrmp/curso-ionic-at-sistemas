import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ReactiveFormPage } from './reactive-form.page';
import { LoadingFeedbackComponent } from 'src/app/shared/components/loading-feedback/loading-feedback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: ReactiveFormPage
    }])
  ],
  declarations: [ReactiveFormPage,LoadingFeedbackComponent]
})
export class ReactiveFormPageModule {}
