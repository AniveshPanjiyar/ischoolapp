import { Component } from '@angular/core';
import {  NavController,ToastController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {CircularService} from './circularservice'

/**
 * Generated class for the CircularsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-circulars',
  templateUrl: 'circulars.html',
})
export class CircularsPage {
  circularcard;
  error;
  toastoption;
  count;
  studentdetail;
  loader;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http ,private toast:ToastController,public circularService:CircularService) {
    this.studentdetail=JSON.parse(localStorage.getItem('studentdetail'));
    this.getcirculars();
  }


  getcirculars(){
    this.loader=true;
    this.circularService.getCircular().subscribe(data => {
        this.circularcard= data;
        console.log(this.circularcard);
       
  },
        
    error => {
      this.loader=false;
      this.toastoption={
        message: error,
        duration: 3000
        
      }
      this.toast.create(this.toastoption).present();
     
    },()=>{this.loader=false;});
   
 
  }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CircularsPage');
  }

}

