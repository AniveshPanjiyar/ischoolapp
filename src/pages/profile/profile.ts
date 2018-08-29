import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuToggle } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({priority:"high"})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  studentDetails;  

  public section: string = 'one';
 
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.studentDetails=JSON.parse(localStorage.getItem("studentdetail"))
    console.log(this.studentDetails);
  }

  onTabChanged(tabName) {
    this.section = tabName;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
   
  }
  

 
}

