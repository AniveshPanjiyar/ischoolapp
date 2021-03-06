import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import * as _ from "lodash";
import { IonicPage, NavController,LoadingController, NavParams, ModalController, AlertController } from 'ionic-angular';
import {CircularService} from'../calendar.service';
import {singularDate,dateObj,eventScheduled} from '../calendar.model'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage } from '@ionic/storage';
import{CacheService} from 'ionic-cache'
/**
 * Generated class for the HolidaysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-holidays',
  templateUrl: 'holidays.html',
})
export class HolidaysPage {
  holidays:Array<eventScheduled>=[];  
  session:String=localStorage.session;
  constructor(public navCtrl: NavController, public http: Http,private storage: Storage, public navParams: NavParams,
    public modalCtrl: ModalController,private alertctrl:AlertController,public circularService:CircularService,public loadingCtrl: LoadingController,public cache:CacheService) {

    this.fetchevents(this.session);
  }
  fetchevents(session){
    let loading = this.loadingCtrl.create({content: 'Please wait...'});
    loading.present();
   
   this.circularService.listHolidays(session).subscribe(data =>
    {  
       this.holidays=data;
        console.log(this.holidays);
  },error=>{
        if(error.status==0){
            setTimeout(() => {
                loading.dismiss();
                alert("Connection error...");
              }, 5000);
        }else{
         loading.dismiss();
        console.log("No Events Found");}
    },()=>loading.dismiss())
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HolidaysPage');
  }

}
