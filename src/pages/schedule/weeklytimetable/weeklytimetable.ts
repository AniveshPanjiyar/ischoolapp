import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScheduleService} from '../schedule.service'
import * as moment from 'moment';
import { Schedule, period_id, TimeTable } from '../schedule.model';

/**
 * Generated class for the WeeklytimetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-weeklytimetable',
  templateUrl: 'weeklytimetable.html',
})
export class WeeklytimetablePage {
  schedule
  period;
  weekHead: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 
  constructor(public navCtrl: NavController, public navParams: NavParams,public scheduleService:ScheduleService) {
    this.getSchedule();
  }

  getSchedule(){
    console.log("getschedule");
  
  
    this.scheduleService.getTimeTable("").subscribe(data => {
      this.schedule=data;
      this.period=this.schedule.period;
      console.log(this.schedule);
     
    },error=>{
      console.log(error);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklytimetablePage');
  }

}
