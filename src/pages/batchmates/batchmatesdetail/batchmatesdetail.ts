import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the BatchmatesdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-batchmatesdetail',
  templateUrl: 'batchmatesdetail.html',
})
export class BatchmatesdetailPage {

  student_id:string;
  studentdetail:any;
  client_id;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {

    this.getstudentdetail();
  }


  getstudentdetail(){

    this.student_id=this.navParams.get('student_id');
    this.client_id=localStorage.client_id;
    this.http.post(localStorage.urlpath+'getStudentInfo' ,{ "student_id":this.student_id,"client":this.client_id
  }).map(res => res.json()).subscribe(res => {
      this.studentdetail = res;
    },(err) => {
    alert("failed loading json data");
  })
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatchmatesdetailPage');
  }


  
}
