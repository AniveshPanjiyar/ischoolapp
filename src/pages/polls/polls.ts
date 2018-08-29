import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import {PollResult} from './pollsmodel';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PollsService} from './pollsservice';



/**
 * Generated class for the PollsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-polls',
  templateUrl: 'polls.html',
})
export class PollsPage {
  public category: string = 'Not Submitted';
  public categories: Array<string> = ['Not Submitted', 'Submitted']
  submitted;
  not_submitted;
  toastoption;
  result;poll_results=[];
 poll_result;
 poll_result_keys=Array();

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,private toast:ToastController, public pollsservice:PollsService) {
    this.getpollquetions();
  }

  
getpollquetions(){
   this.pollsservice.getPollsQuestion().subscribe(data => {
  this.submitted = data.submitted;
  this.not_submitted=data.not_submitted;
  console.log(data);

  this.toastoption={
    message: data.msg,
    duration: 3000

  }

  this.toast.create(this.toastoption).present();
       }
       ,error => {
        
      if(error.status=="0")
      error="connection Failed";
      this.toastoption={
        message: error,
        duration: 3000

      }
      this.toast.create(this.toastoption).present();
     
    })
  }

 /*  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PollsPage');
  }
 */


onTabChanged(tabName) {
  this.category = tabName;
  }

toggleSectionnotsubmitted(i) {

  this.not_submitted[i].open = !this.not_submitted[i].open;
   }
toggleSectionsumbitted(j) {
  
    this.submitted[j].open = !this.submitted[j].open;
    this.getPollResult(j).subscribe(data => {
      this.poll_result=data;
      if(this.poll_result.msg==null) 
      {
        this.poll_results[j]=[];
       for ( let i=0; i < this.poll_result.length;i++)
       { 
          var op=this.poll_result[i].option_id;
           this.poll_results[j][op]=this.poll_result[i];
          // Assign Colour
           var bg_colour:String; var perc:Number;
            perc=this.poll_result[i].perc;
           if(perc<=100 && perc>=60) bg_colour="#00FF00";
          if(perc<60 && perc >=30) bg_colour="#FFD700";
          if(perc<30 && perc >0) bg_colour="#FF6347";
           console.log(bg_colour);
          this.poll_results[j][op]['bg']=bg_colour;
          //------------
          }
        }
        console.log(this.poll_results);
     });
     }



     
addPollChoice(poll_schedule_id,option_id)

      {
        console.log(poll_schedule_id,option_id);
        this.http.post(localStorage.urlpath+'addPollChoice' ,{ "client":localStorage.client_id, "poll_schedule_id":poll_schedule_id,"option_no":option_id,"login_id":localStorage.login_id
      }).map(res => res.json()).subscribe(data => 
        {
      this.result=data;
      console.log(this.result.msg);
      this.toastoption={
        message: this.result,
        duration: 3000
        }
      this.toast.create(this.toastoption).present();
        }
          ,error => {
         this.toastoption={
            message: error,
            duration: 3000
        }
          this.toast.create(this.toastoption).present();
         
        });
      }

getPollResult(poll_schedule_id):Observable<PollResult>
     {
          return this.http.post(localStorage.urlpath+'showPollResult' ,{ "client":localStorage.client_id, "poll_schedule_id":poll_schedule_id,"login_id":localStorage.login_id
      }).map(res => res.json().map(( poll_result1:PollResult) => new PollResult().deserialize(poll_result1) ));

      }
  
   
}
