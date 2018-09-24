import { Component } from '@angular/core';
import { IonicPage,LoadingController, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { BatchmatesdetailPage } from './batchmatesdetail/batchmatesdetail';
import {BatchmatesserviceProvider} from './batchmatesservice'

/**
 * Generated class for the BatchmatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-batchmates',
  templateUrl: 'batchmates.html',
})
export class BatchmatesPage {
  classmates:any;
  search_class=localStorage.class;
  search_section=localStorage.section;
  search_stream=localStorage.stream;
  loading = this.loadingCtrl.create({content: 'Please wait...'});



  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http ,public batchmatesserviceProvider:BatchmatesserviceProvider,public loadingCtrl: LoadingController) {
    this.getbatchmatesdetail();
}


//to get list of classmates
  getbatchmatesdetail(){

   
    this.loading.present();
      this.batchmatesserviceProvider.getbatchmatesdetail().subscribe(data=> 
        {this.classmates=data},
      error=>{
        this.loading.dismiss();
      },
        ()=>{
          this.loading.dismiss()
      });
      console.log(this.classmates)

  }

  //to open the detailed profile page of the clicked student 
  openprofile(student_id: string){

    this.navCtrl.push(BatchmatesdetailPage, {student_id});
  };

  
  //on view load
  ionViewDidLoad() {
    console.log('ionViewDidLoad BatchmatesPage');
  }

  ionViewWillLeave(){
    this.loading.dismiss();
  }

}
