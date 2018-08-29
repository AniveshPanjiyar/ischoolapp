import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { QuizServices} from '../quizServices';
import 'rxjs/add/operator/map';
/**
 * Generated class for the TopicscorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-topicscore',
  templateUrl: 'topicscore.html',
})
export class TopicscorePage {
topic_score=Array();
topics=Array();
subject='Training';
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http, public QuizServ:QuizServices )
  { 
    this.getCandidateQuizTopicWiseSumScore(this.subject,null);
 }


 getCandidateQuizTopicWiseSumScore(subject,sub_subject)
 { 
  return  this.http.post(localStorage.urlpath+'getCandidateQuizTopicWiseSumScore', {
   "client": localStorage.client_id,"student_id":localStorage.student_id,"subject":subject,
   "sub_subject":sub_subject,"class_name":"U-16","stream":localStorage.stream
   }).map(response => response.json()).subscribe(data => 
    { this.topic_score=data; 
      this.topics = Object.keys(this.topic_score);  console.log(this.topic_score) });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicscorePage');
  }

}
