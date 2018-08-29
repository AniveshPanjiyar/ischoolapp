import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Subjects} from './model'
import 'rxjs/add/operator/map';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuizServices {

  client_id=localStorage.client_id;
  studentdetail;
  scores=[];
  constructor(public http: Http) {
    
   this.studentdetail=JSON.parse(localStorage.getItem('studentdetail'));
  }
 
  getSubjects()
  { var subjects;
    return  this.http.post(localStorage.urlpath+'studentSubjects' ,{ "client":localStorage.client_id,"student_id":localStorage.student_id,"session":localStorage.session,"class":localStorage.class,"stream":localStorage.stream
  }).map(res => res.json().map((subjects:Subjects) => new Subjects().deserialize(subjects)))
}



}