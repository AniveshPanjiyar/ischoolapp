import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScheduleService} from '../schedule.service'
import * as moment from 'moment';
import { Schedule, period_id, TimeTable } from '../schedule.model';


/**
 * Generated class for the TodaytimetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-todaytimetable',
  templateUrl: 'todaytimetable.html',
})
export class TodaytimetablePage {
  studentdetails;
  schedule:Schedule;
  periods;
  day:number=moment().day();
  daytimetable:TimeTable;
  date: string = new Date().toISOString();
  todayDay;
  DaySelected;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public scheduleService:ScheduleService) {
    this.day=this.day+1;
    this.studentdetails=JSON.parse(localStorage.getItem('studentdetail'));
    this.getSchedule();
  }

  getSchedule(){
    
    let Day=this.day;
   
    this.scheduleService.getTimeTable(Day).subscribe(data => {
      console.log(Day);
      this.schedule=data;
      this.periods=data.period;
      this.daytimetable=data.tt[Day];
      console.log(this.daytimetable[Day])
    },error=>{
      console.log(Day);
      console.log(error);
    })
  }

  checkarray(period){
    return Array.isArray(this.daytimetable[period]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodaytimetablePage');
  }

}
