import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchedulePage } from './schedule';
import{ TodaytimetablePage} from './todaytimetable/todaytimetable';
import{ WeeklytimetablePage} from './weeklytimetable/weeklytimetable';

import{ TeachertodayttPage} from './teachertodaytt/teachertodaytt';
import{ TeacherweeklyttPage } from './teacherweeklytt/teacherweeklytt';

import {ScheduleService} from './schedule.service';


@NgModule({
  declarations: [
    SchedulePage,
    TodaytimetablePage,
    WeeklytimetablePage,
    TeachertodayttPage,
    TeacherweeklyttPage
    
  ],
  imports: [
      
    IonicPageModule.forChild(SchedulePage)
  ], 
  exports:[SchedulePage,TodaytimetablePage,WeeklytimetablePage,TeachertodayttPage,TeacherweeklyttPage],
  entryComponents: [SchedulePage,TodaytimetablePage,WeeklytimetablePage,TeachertodayttPage,TeacherweeklyttPage],
  providers:[ScheduleService]
})
export class SchedulePageModule {}
