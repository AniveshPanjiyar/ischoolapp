import { NgModule } from '@angular/core';
import { IonicModule ,IonicPageModule} from 'ionic-angular';
import{DayAttendance} from './dayattendance' 
import {DayAttendanceService} from './dayattendance.service'
import { monthName } from './pipes/month-name';


@NgModule({
  declarations: [
  DayAttendance,
  monthName

  ],
  imports: [
    IonicModule,
  IonicPageModule.forChild(DayAttendance)
  ],
  exports: [
    DayAttendance,
    monthName 
  ],
  entryComponents:[
    DayAttendance,
  ],
  providers:[
    DayAttendanceService
  ]

})
export class DayAttendanceModule { }