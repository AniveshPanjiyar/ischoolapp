import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HealthstatusserviceProvider} from './healthstatusservice'
/**
 * Generated class for the HealthstatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-healthstatus',
  templateUrl: 'healthstatus.html',
 
})
export class HealthstatusPage {
classmates:any;
studentdetails;
constructor(public navCtrl: NavController, public navParams: NavParams,public healthstatusserviceProvider:HealthstatusserviceProvider) { 
  this.studentdetails=JSON.parse(localStorage.getItem('studentdetail'));
    this.gethealthstatusdetail();

}



gethealthstatusdetail(){

  this.healthstatusserviceProvider.gethealthstatusdetail().subscribe(data =>{this.classmates=data
  },error=>{
    console.log(error);
  });
  console.log(this.classmates)

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthstatusPage');
   
  }
 
}
