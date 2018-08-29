import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{TodaytimetablePage} from './todaytimetable/todaytimetable';
import{ WeeklytimetablePage} from './weeklytimetable/weeklytimetable';
import{ TeachertodayttPage} from './teachertodaytt/teachertodaytt';
import{ TeacherweeklyttPage } from './teacherweeklytt/teacherweeklytt';

//import { Calendar } from '@ionic-native/calendar';
/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({priority:'high'})
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  tab1;
  tab2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(localStorage.type=='Student')
    { this.tab1= TodaytimetablePage;
      this.tab2=  WeeklytimetablePage;
    }
      if(localStorage.type=='Teacher')
      { 
        this.tab1= TeachertodayttPage;
        this.tab2= TeacherweeklyttPage;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }


}
