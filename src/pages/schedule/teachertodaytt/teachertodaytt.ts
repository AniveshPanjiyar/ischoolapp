import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScheduleService} from '../schedule.service';
import * as moment from 'moment';
import { TeacherSchedule, period_id, TeacherTimeTable1  } from '../schedule.model';

/**
 * Generated class for the TeachertodayttPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teachertodaytt',
  templateUrl: 'teachertodaytt.html',
})
export class TeachertodayttPage {
  schedule:TeacherSchedule;
  periods;teacher_id;shifts;
  day:number=moment().day();
  daytimetable:TeacherTimeTable1;
  date: string = new Date().toISOString();
  todayDay;
  DaySelected;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public scheduleService:ScheduleService) {
    this.day=this.day+1;
    this.teacher_id=localStorage.teacher_id;
     this.getTeacherTodaySchedule();
  }

  getTeacherTodaySchedule(){
    
    let Day=this.day;
   
    this.scheduleService.getTeacherTodayTimeTable(localStorage.teacher_id,Day).subscribe(data => {
      console.log(data);
     // this.schedule=data;
      this.shifts=data.shift;
      this.periods=data.period;
     // if(data.tt)  this.daytimetable=data.tt;
     //   console.log(daytimetable);  
    },error=>{
      console.log(Day);
      console.log(error);
    })
  }

  checkarray(shift,period){
    return Array.isArray(this.daytimetable[shift][period]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachertodayttPage');
  }

}
