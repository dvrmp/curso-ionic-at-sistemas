import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitDetailsPageRoutingModule } from './fruit-details-routing.module';

import { FruitDetailsPage } from './fruit-details.page';
import { LoadingFeedbackComponent } from 'src/app/shared/components/loading-feedback/loading-feedback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FruitDetailsPage,LoadingFeedbackComponent]
})
export class FruitDetailsPageModule {}
