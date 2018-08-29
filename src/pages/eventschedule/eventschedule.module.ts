import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventschedulePage } from './eventschedule';

@NgModule({
  declarations: [
    EventschedulePage,
  ],
  imports: [
    IonicPageModule.forChild(EventschedulePage),
  ],
})
export class EventschedulePageModule {}
