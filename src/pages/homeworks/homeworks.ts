import { Component,Input, ElementRef, Renderer } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Homework } from './homeworkmodel';
import{HomeworkServices} from './homework.service'




@Component({
  selector: 'page-homeworks',
  templateUrl: 'homeworks.html',
})
export class HomeworksPage {


date=[];
day_subjects=[];
periods:any;
loader;
homework;
subjects;
subject_selected=null;






constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public homeworkServices:HomeworkServices) {
    this.getsubjectHomework();
    this.getsubjects();
  }
  getsubjectHomework()
  {
   let subject_selected=this.subject_selected; 
   console.log(subject_selected);
    this.loader=true;
    this.date=[];
    this.day_subjects=[];
    this.homeworkServices.getHomework(subject_selected).subscribe(data=>{  
    console.log(data);
    for(let i=0;i<data.length;i++){
        this.date.push(Object.keys(data[i]).map(key => {return key}));
        this.day_subjects[this.date[i][0]]=Object.keys( data[i][this.date[i][0]]).map(key => {return key});
      }

      this.homework=data;
    
    
    

    
},error=>{
  this.loader=false;
  console.log(error);
},()=>{this.loader=false;});
}


getsubjects(){
  this.loader=true;
  this.homeworkServices.getSubjects().subscribe(data=>{  
  this.subjects=data;
  console.log(this.subjects);
 
  
},error=>{
this.loader=false;
console.log(error);
},()=>{this.loader=false;});

  
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworksPage');
  } 


  


  

}
