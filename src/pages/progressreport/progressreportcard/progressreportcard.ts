import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProgressreportcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-progressreportcard',
  templateUrl: 'progressreportcard.html',
})
export class ProgressreportcardPage {
  exam_name;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.exam_name = navParams.get('exam_name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressreportcardPage');
  }

}
