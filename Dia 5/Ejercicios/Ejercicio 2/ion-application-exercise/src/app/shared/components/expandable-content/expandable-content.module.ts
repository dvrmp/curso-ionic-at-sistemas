import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { ExpandableContentComponent } from './expandable-content.component';

@NgModule({
    declarations:[ExpandableContentComponent],
    imports:[IonicModule,CommonModule],
    exports:[ExpandableContentComponent]
})
export class ExpandableContentModule {}