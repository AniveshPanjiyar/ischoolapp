import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { QuizServices} from '../quizServices';
import { TopicscorePage } from '../topicscore/topicscore';
import 'rxjs/add/operator/map';

/**
 * Generated class for the SubjectscorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-subj ectscore',
  templateUrl: 'subjectscore.html',
})
export class SubjectscorePage {
  data;
  subject_scores=[];
  Student_Subjects=[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http, public QuizServ:QuizServices )
   {
    this.QuizServ.getSubjects().subscribe(data => {
      this.Student_Subjects=data;
      for ( let i=0; i < this.Student_Subjects.length;i++)
       {
        var subj=this.Student_Subjects[i].subject;
        var sub_subj=this.Student_Subjects[i].sub_subject;
              this.getCandidateQuizScoreCard(subj,sub_subj);
        }
        console.log(this.subject_scores);
    });
  }


  getCandidateQuizScoreCard(subject,sub_subject)
  { var scores=[];
   return  this.http.post(localStorage.urlpath+'getCandidateQuizScoreCard', {
    "client": localStorage.client_id,"student_id":localStorage.student_id,"subject":subject,
    "sub_subject":sub_subject,"class_name":"U-16","stream":localStorage.stream
    }).map(response => response.json()).subscribe(data => { this.subject_scores[subject]=data; });
  }

   //Navigate to details of that  
 openSubjectTopicsScore(subject) {
  this.navCtrl.push(TopicscorePage,subject);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjectscorePage');
  }

}
