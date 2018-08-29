import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessioncalendarPage } from './sessioncalendar';

@NgModule({
  declarations: [
    SessioncalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(SessioncalendarPage),
  ],
  exports: [
    SessioncalendarPage,
   ],
    entryComponents:[
      SessioncalendarPage,
  ],
})
export class SessioncalendarPageModule {}
