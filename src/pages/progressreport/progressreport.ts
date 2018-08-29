import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {ProgressreportcardPage} from './progressreportcard/progressreportcard'



/**
 * Generated class for the ProgressreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-progressreport',
  templateUrl: 'progressreport.html',
})
export class ProgressreportPage {
  
  examsdetail: any[];
  subjectsdetail:any;
  subjects_syllabus:any;
  loader;


  constructor(public navCtrl: NavController, private http: Http) {
    this.getexamdetail();
   
  }
 
 
 

  getexamdetail(){
    this.http.post(localStorage.urlpath+'getClassExamList' , {
      "client": localStorage.client_id, "class_name":localStorage.class ,"stream":localStorage.stream, "section":localStorage.section, "session":localStorage.session
      }).map(res => res.json()).subscribe(res => {
      this.examsdetail= res;
      console.log(this.examsdetail);
    },(err) => {
    alert("failed loading json data");
  })
  }

  getsubjectsdetail(exam_name){
    this.loader=true;
    this.http.post(localStorage.urlpath+'getClassExamSubjectWiseSchedule ' , {
      "client": localStorage.client_id, "class_name":localStorage.class ,"stream":localStorage.stream, "section":"GGN1A", "session":localStorage.session , "exam_name":exam_name
      }).map(res => res.json()).subscribe(res => {
     this.subjectsdetail= Object.keys(res).map(key => {
      return res[key];
  })
  this.loader=false;
      console.log(this.subjectsdetail);
    },(err) => {
      this.loader=false;
    alert("failed loading json data");
  },()=>{this.loader=false;})


  }

  
  
  viewreportcard(exam_name :String){
    this.navCtrl.push(ProgressreportcardPage,{exam_name});
    console.log(exam_name);

  }

  toggleSection(i,exam_name) {
    this.subjectsdetail=[];
    this.getsubjectsdetail(exam_name);

    for (let j=0;j<this.examsdetail.length;j++){if(j!=i){this.examsdetail[j].open=false}} //to close the othe accordion list items
    

    this.examsdetail[i].open = !this.examsdetail[i].open;
    console.log(this.examsdetail[i].open);
  }
 
  toggleItem(j) {
    this.subjectsdetail[j].open = !this.subjectsdetail[j].open;
  }

 /*  getsubjects_syllabus(){
    this.http.post('https://cors-anywhere.herokuapp.com/http://ischool.co.in/icoach/include/rest/getStudentListForClassSectionStreamSession' ,  {
      "client":this.client_id,"class_name":this.studentdetail.class,"stream":this.studentdetail.stream,"section":this.studentdetail.section,"session":"2016-2017"
      }).map(res => res.json()).subscribe(res => {
      this.classmates= res;
      console.log(this.classmates);
    },(err) => {
    alert("failed loading json data");
  })

  } */
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressreportPage');
  }

}
