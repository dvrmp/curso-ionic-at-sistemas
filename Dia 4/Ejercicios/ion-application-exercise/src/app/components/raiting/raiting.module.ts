import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { RaitingComponent } from './raiting.component';

@NgModule({
    declarations:[RaitingComponent],
    imports:[IonicModule,CommonModule],
    exports: [RaitingComponent]
})
export class RaitingModule {}