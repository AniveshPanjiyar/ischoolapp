import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {LoginPage} from '../login';
import { Http } from '@angular/http';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
client_id; client_status;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public http:Http, public menu : MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
    
  checkClient(client_id){
    this.http.post('https://cors-anywhere.herokuapp.com/http://ischool.co.in/trunk/include/rest/checkClient',{ "check_client": client_id
    }).map(res => res.json())
    .subscribe(data=>{
      this.client_status=data;
      
      if(data.status==true)
      { console.log(this.client_status.status); 
        localStorage.client_id=client_id;
        localStorage.code_url=this.client_status.code_url;
        localStorage.client_turl=this.client_status.client_turl;
         localStorage.urlpath="https://cors-anywhere.herokuapp.com/http://"+this.client_status.code_url+"/include/rest/";
         this.navCtrl.setRoot(LoginPage);
 
      }
 }
      ,error=>{ console.error(error)})

       
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
