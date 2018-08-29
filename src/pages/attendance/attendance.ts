import { Component } from '@angular/core';
import * as moment from 'moment';
import { IonicPage,LoadingController, NavController, NavParams } from 'ionic-angular';
import {AttendanceServiceProvider} from './attendanceservice'
import{DayAttendance} from './dayAttendance/dayattendance'

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-attendance',
    templateUrl: 'attendance.html',
})
export class AttendancePage {
  sessionattendance;
  studentdetail;
  percent;

  currentYear: number = moment().year(); 
  currentMonth: number = moment().month();


  constructor(public navCtrl: NavController, public navParams: NavParams ,public attendanceService:AttendanceServiceProvider,public loadingCtrl: LoadingController) {

    this.studentdetail=JSON.parse(localStorage.getItem('studentdetail'));
    this.getSessionAttendance();
  }
      
 
 
 
      getSessionAttendance(){
        let loading = this.loadingCtrl.create({content: 'Please wait...'});
        loading.present();
        this.attendanceService.getSessionAttendance().subscribe(data =>{
              this.sessionattendance=data;
              console.log(this.sessionattendance);
        },error=>{
          if(error.status==0){
            setTimeout(() => {
                loading.dismiss();
                console.error("Connection error...");
              }, 5000);
            
        }else{
          console.log(error);
          loading.dismiss();
        }
         
        },()=>loading.dismiss())
      }

                    
      getattendancepercent(marked,absent){
        if(marked==0)return null;
        
        var percent= Math.round(((marked-absent)/marked)*100);
        return percent+'%'
        }

      
      showMonthAttendance(month,year){
        console.log('Month Button clicked'+month+year);
        this.navCtrl.push(DayAttendance, {month,year});
      }
      
      
      ionViewDidLoad() {
        console.log('ionViewDidLoad AttendancePage');
      }
     
}
