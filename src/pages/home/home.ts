import { Component } from '@angular/core';
import { NavController , } from 'ionic-angular';

import {NewsPage} from '../../pages/news/news'
import {HomeworksPage} from '../../pages/homeworks/homeworks'
import {CircularsPage} from '../../pages/circulars/circulars'
import {WelcomePage} from '../../pages/login/welcome/welcome'




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  statusresponse;
  count;
  
  tab1: any = NewsPage;
  tab2: any = CircularsPage;
  tab3: any = HomeworksPage;

  constructor(public navCtrl: NavController ) {

   if (localStorage.loginStatus != 'success'  ) {
      navCtrl.setRoot(WelcomePage);
    } 

  
  }

  

}
