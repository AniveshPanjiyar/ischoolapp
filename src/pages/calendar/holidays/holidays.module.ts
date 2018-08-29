import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HolidaysPage } from './holidays';

@NgModule({
  declarations: [
    HolidaysPage,
  ],
  imports: [
    IonicPageModule.forChild(HolidaysPage),
  ],
  exports: [
    HolidaysPage,
   ],
    entryComponents:[
      HolidaysPage,
  ],
})
export class HolidaysPageModule {}
