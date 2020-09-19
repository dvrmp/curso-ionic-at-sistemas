//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Ionic
import { IonicModule } from '@ionic/angular';

//Component
import { SandboxPageRoutingModule } from './sandbox-routing.module';
import { SandboxPage } from './sandbox.page';

//Modules
import { ExpandableContentModule } from 'src/app/components/expandable-content/expandable-content.module';
import { RaitingModule } from 'src/app/components/raiting/raiting.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SandboxPageRoutingModule,
    ExpandableContentModule,
    RaitingModule
  ],
  declarations: [SandboxPage]
})
export class SandboxPageModule {}
