import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage } from '@ionic/storage';
/**
 * Generated class for the EventschedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventschedule',
  templateUrl: 'eventschedule.html',
})
export class EventschedulePage {
  events: Array<eventScheduled>=[];
  array:any=[];
  client_id=localStorage.client_id;
  response:Array<any>;
  






  constructor(public navCtrl: NavController,  public http: Http,private storage: Storage,public navParams: NavParams)
  {this.fetchevents();  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventschedulePage');
  }
  fetchevents(){
    this.http.post(localStorage.urlpath+'eventScheduled', { "client":this.client_id, "current_date": "06-05-2017"
}).map(res => res.json()).subscribe(data =>{this.events=Object.keys(data).map(key=>{return data[key]});
        console.log(Object.keys(data).map(key=>{return data[key]}))

        
 },error=>{
  console.log(error);
})  }


 Response(response){
   console.log("Response"+response);


 }

}


 interface eventScheduled{
  event_id: string,
  schedule_id: string,
  event_eame: string,
  eescription:string,
  start_date:string,
  end_date: string,
  location:string,
  doc_path:string,
  image_path:string
  response:any;
}