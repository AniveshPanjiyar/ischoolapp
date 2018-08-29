import { NgModule } from '@angular/core';
import { IonicModule ,IonicPageModule} from 'ionic-angular';
import{Calendar} from './calendar' ;
import { SessioncalendarPageModule } from './sessioncalendar/sessioncalendar.module';
import { HolidaysPageModule } from './holidays/holidays.module';
import {CircularService} from './calendar.service';
import { monthName } from './pipes/month-name';


@NgModule({
  declarations: [
  Calendar,
   monthName,
   
  ],
  imports: [
    IonicModule,
    SessioncalendarPageModule,
    HolidaysPageModule,
  IonicPageModule.forChild(Calendar),
  
  ],
  exports: [
    Calendar,
    monthName,
     
  ],
  entryComponents:[
  Calendar,
  
  ],
  providers:[
    CircularService
  ]

 

})
export class CalendarModule { }