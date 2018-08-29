import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendancePage } from './attendance';
import {AttendanceServiceProvider} from './attendanceservice'
import {DayAttendanceModule} from './dayAttendance/dayattendance.module'
import {MarkattendancePageModule} from './markattendance/markattendance.module'

@NgModule({
  declarations: [
    AttendancePage,
  ],
  imports: [
    DayAttendanceModule,
    IonicPageModule.forChild(AttendancePage),
  ],
  exports:[AttendancePage],
  

  entryComponents:[
    AttendancePage,
  ],
  providers:[
    AttendanceServiceProvider
    
  ]
})
export class AttendancePageModule {}
