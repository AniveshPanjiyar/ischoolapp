import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddhomeworkPage } from './addhomework';


@NgModule({
  declarations: [
    AddhomeworkPage,
  ],
  imports: [
    IonicPageModule.forChild(AddhomeworkPage),
  ],
  exports:[
    AddhomeworkPage,
  ],
  entryComponents:[
    AddhomeworkPage,
  ],
})
export class AddhomeworkPageModule {}
