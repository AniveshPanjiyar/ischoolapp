import { Component } from '@angular/core';
import {  ViewController, ToastOptions, MenuController } from 'ionic-angular';
import { IonicPage,ToastController, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';

import { Events } from 'ionic-angular';


import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch'; 



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
 
})
export class LoginPage {

  posts:any;
  error;
  loginData = {"email":"","password":""};
  statusresponse;
  toastoption:ToastOptions;
  response;


  
constructor(public navCtrl: NavController, public navParams: NavParams ,public http:Http , public viewCtrl: ViewController,private toast:ToastController ,public events: Events, public menu : MenuController) {

     // used for an example of ngFor and navigation
   }

  signin(loginData){
    if(loginData.email && loginData.password){
    this.http.post(localStorage.urlpath +'Login', {
      "login_id":loginData.email,"password": loginData.password,"client": localStorage.client_id
       }).map(res  => {
        //console.log('GET RESPONSE  =>', res);
        //console.log('GET RESPONSE headers => ', res.headers);
        // If everything went fine, return the response
        if(res.status >= 200 || res.status <300) {
          console.log('GET IN SUCCESS RESPONSE ==> ');
          return res.json();
        }
      })
       .subscribe(data => {
      
        this.posts = data;

      
        if(this.posts.status=="success")
        {
              localStorage.loginStatus = 'success';
              localStorage.type=this.posts.type;
              localStorage.school_logo=this.posts.school_logo;
              localStorage.session=this.posts.session;
              
          if(this.posts.type=='Student')
            {
              localStorage.student_id=this.posts.student_id;
              localStorage.class=this.posts.class;
              localStorage.section=this.posts.section;
              localStorage.stream=this.posts.stream;
              localStorage.login_id=this.loginData.email;
              localStorage.email_id=this.posts.email_id;
            }
            if(this.posts.type=='Teacher')
            {
              localStorage.teacher_id=this.posts.teacher_id;
              localStorage.class=this.posts.class;
              localStorage.section=this.posts.section;
              localStorage.stream=this.posts.stream;
              localStorage.login_id=this.loginData.email;
              localStorage.email_id=this.posts.email_id;
            }
              localStorage.setItem('studentdetail', JSON.stringify(this.posts));
              localStorage.setItem('moduleActive', JSON.stringify(this.posts.module_active));
              this.events.publish('app_modules:fetched', JSON.stringify(this.posts.module_active));
    
              
              console.log(this.posts);
             
                this.navCtrl.setRoot(HomePage);
            }

           else{
            this.toastoption={
              message: this.posts.msg,
              duration: 3000
      
            }
             this.toast.create(this.toastoption).present();


           }
          
        
    },
    error => {
      if(error.status=="0"){
        this.error ="No internet Connection"
      }

      else{this.error="Client not found"}
      console.log(error.status);
      this.toastoption={
        message:this.error,
        duration: 3000

      }
      this.toast.create(this.toastoption).present();
     
    })
   
 
  }

      
    
      }
  
  ionViewDidLoad() {
   

  

    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on this page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menu.enable(true);
  }

}
