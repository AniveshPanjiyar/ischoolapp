import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{SyllabusService} from './syllabusservice'

/**
 * Generated class for the SyllabusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-syllabus',
  templateUrl: 'syllabus.html',
})
export class SyllabusPage {
  Subjects;
  Topics;
  subject_open:String;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public syllabusservice:SyllabusService) {
    this.getSubjects();
  }

  
  
  
  
   getSubjects(){
    this.syllabusservice.getSubjects().subscribe(data => {
      this.Subjects=data;
      console.log(this.Subjects);
    },error=>{console.log(error)} )

  }

 
  toggleSelection(i,subject){
    this.Topics=[];
    this.syllabusservice.getTopics(subject).subscribe(data => {
      this.Topics=data;
      console.log(this.Topics);
      this.Subjects[i].open =  !this.Subjects[i].open;
      this.subject_open=subject;
    },error=>{
      console.log(error);
    }
  )
    

  }

  toggleSelected(j){
     
    this.Topics[j].open=!this.Topics[j].open;
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyllabusPage');
  }

}
