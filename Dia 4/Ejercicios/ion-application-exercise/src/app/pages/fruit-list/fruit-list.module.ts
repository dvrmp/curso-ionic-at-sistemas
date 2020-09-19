//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Ionic
import { IonicModule } from '@ionic/angular';

//Modules
import { FruitListPageRoutingModule } from './fruit-list-routing.module';
import { ExpandableContentModule } from 'src/app/components/expandable-content/expandable-content.module';

//Components
import { FruitListPage } from './fruit-list.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FruitListPageRoutingModule,
    ExpandableContentModule
  ],
  declarations: [FruitListPage]
})
export class FruitListPageModule {}
