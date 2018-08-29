import { Component } from '@angular/core';
import {  NavController, NavParams,ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';
import {NewsService} from './newsServices';
import {NewsdetailPage} from './newsdetail/newsdetail';
import { News ,Errors} from './newsmodel';



@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  

 
})
export class NewsPage {

  public newscard;
  buttonColor: string = '#b4bcca';
  toastoption;
  error;  count;
  school_logo;
  loader;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,private sqlite: SQLite,private toast:ToastController,public newsService:NewsService)
   {
     this.school_logo= localStorage.school_logo;
   
     this.getNews();
  
 

  }

  getNews(){
    this.loader=true;
    this.newsService.getNews().subscribe(data => {
      console.log(data);
        this.newscard = data;
        this.count=this.newscard.length;
        console.log(length);
      },  error => {
        console.log(error);
      this.loader=false;
      this.toast.create({
        message: 'Something bad happened; please try again later.',
        duration: 3000}).present();
      
      },()=>{this.loader=false;})
  }

 /*  countnews(){
    this.newsService.countnews().subscribe(count => this.count=count )
    console.log(this.count)
  }
 */
  



  //Navigate to details of that news 
gotodetail(news_id: string) {
  this.navCtrl.push(NewsdetailPage, {news_id});
}


// Like Butoon response
addEvent(){
  this.buttonColor = '#345465'; //desired Color
  
  /*
  YOUR FUNCTION CODE
  */ 
  }
}
