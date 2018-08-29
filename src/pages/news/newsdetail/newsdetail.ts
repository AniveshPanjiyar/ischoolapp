import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the NewsdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-newsdetail',
  templateUrl: 'newsdetail.html',
})
export class NewsdetailPage {

  newsdetails:any;  school_logo;
  news_id: string;imagepath;
  loader;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {

    this.news_id = navParams.get('news_id');
    this.school_logo= localStorage.school_logo;
    this.getnewsdetail(this.news_id);
   
  }

  getnewsdetail(news_id){
    this.loader =true;
    this.http.post(localStorage.urlpath+'newsDetail' ,{ "news_id": news_id,"client": "cf"
  }).map(res => res.json()).subscribe(res => {
      this.newsdetails = res;
    },(err) => {
    alert("failed loading json data");
    this.loader =false;
  },()=>{this.loader =false;})
  }

  getimagepath(image_path,image){
    this.imagepath= image_path+image;
    console.log(this.imagepath);
    return this.imagepath;
    

  }


 

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsdetailPage');
  }

}
