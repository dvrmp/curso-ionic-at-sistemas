//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Ionic
import { IonicModule } from '@ionic/angular';

//Modules
import { FruitListPageRoutingModule } from './fruit-list-routing.module';
import { ExpandableContentModule } from 'src/app/shared/components/expandable-content/expandable-content.module';

//Components
import { FruitListPage } from './fruit-list.page';
import { LoadingFeedbackComponent } from 'src/app/shared/components/loading-feedback/loading-feedback.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FruitListPageRoutingModule,
    ExpandableContentModule
  ],
  declarations: [FruitListPage,LoadingFeedbackComponent]
})
export class FruitListPageModule {}
