import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScheduleService} from '../schedule.service';
import * as moment from 'moment';
import { TeacherSchedule, period_id, TimeTable  } from '../schedule.model';
/**
 * Generated class for the TeacherweeklyttPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teacherweeklytt',
  templateUrl: 'teacherweeklytt.html',
})
export class TeacherweeklyttPage {

  schedule:TeacherSchedule;
  periods;teacher_id;shifts;
  day:number=moment().day();
  daytimetable:TimeTable;
  date: string = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams ,public scheduleService:ScheduleService) {
    this.teacher_id=localStorage.teacher_id;
    
     this.getTeacherWeeklySchedule();
  }

  getTeacherWeeklySchedule()
  { console.log(this.teacher_id);
     this.scheduleService.getTeacherWeeklyTimeTable(localStorage.teacher_id).subscribe(data => {
      console.log(data);
       this.shifts=data.shift;
      this.periods=data.period;
      if(data.tt)
        this.daytimetable=data.tt;
     //   console.log(daytimetable);  
    },error=>{
      console.log(error);
    })
  }

  checkarray(shift,period){
    return Array.isArray(this.daytimetable[shift][period]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherweeklyttPage');
  }

}
