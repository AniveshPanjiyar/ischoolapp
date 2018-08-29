import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import {Nextquestion} from './model';
//import {QuizServices} from './quizServices';
import { Observable } from 'rxjs/Observable';
import {SubjectscorePage} from './subjectscore/subjectscore';
import 'rxjs/add/operator/map';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
   result1=[];   quizquestion;
  error; error_tick:String;
  toastoption; 
  nextquestion:Nextquestion;
  option_button;      disabled;
  currentIndex:0;     subject="Training";
  option_colour=[]; scores=[];
  //QuizServ:QuizServices;
  selectedValue;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,private toast:ToastController) {
    this.getquizquestion();
  }
 
  getquizquestion(){
      this.option_colour=[];
      this.error_tick=null;
      this.getCandidateQuizScoreCard(this.subject,null);
  return this.http.post(localStorage.urlpath+'getNextQuestionForClass', {
      "client": localStorage.client_id,"subject":this.subject,"class_name":localStorage.class
      }) .map(response => response.json()).subscribe(data => {this.nextquestion=data; console.log(this.nextquestion)});
      
    }


    checkquestion(qsn_id,option_no,answer)
    { this.addQuizAttempt(qsn_id,option_no,answer);
     
      this.currentIndex=option_no;
      this.error_tick=null; 
      if(option_no==answer)
      {
        this.disabled='disabled';
        this.option_colour[option_no]="#3CB371";
        this.error_tick='Correct';
      } else {
        this.option_colour[answer]="#3CB371";
        this.option_colour[option_no]="#CD5C5C"; 
        this.error_tick='Wrong';
      }
     
      
      this.getCandidateQuizScoreCard(this.subject,null);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }


  addQuizAttempt(qsn_id,option_no,answer)
 {
    var marks=0;  this.result1=[];
    if(option_no==answer){ marks=1;}
   // console.log(qsn_id,option_no,marks,localStorage.student_id);

    this.http.post(localStorage.urlpath+'addQuizAttempt',{ 
     "client":localStorage.client_id,"quiz_id":qsn_id,"option_no":option_no,"marks_awarded":marks,"student_id":localStorage.student_id
  }).map(res => { return res.json()}).subscribe(data1 => 
    {this.result1=data1;
    },error=>{}
    //{console.log(error);
    )
  }

  getCandidateQuizScoreCard(subject,sub_subject=null)
  { this.scores.length=0;
   return  this.http.post(localStorage.urlpath+'getCandidateQuizScoreCard', {
    "client": localStorage.client_id,"student_id":localStorage.student_id,"subject":subject,
    "sub_subject":sub_subject,"class_name":"U-16","stream":localStorage.stream
    }).map(response => response.json()).subscribe(data => {this.scores=data; console.log(this.scores)});
  }

 //Navigate to details of that  
 openAllSubjectsScore() {
  this.navCtrl.push(SubjectscorePage);
}
}
