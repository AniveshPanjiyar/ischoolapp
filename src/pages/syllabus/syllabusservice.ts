import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subjects,Subtopic} from './syllabusmodel'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SyllabusService {

  constructor(public http: Http) {
    
  
  }

  getSubjects(): Observable<Subjects>{
      return  this.http.post(localStorage.urlpath+'studentSubjects' ,{ "client":localStorage.client_id,"student_id":localStorage.student_id,"session":localStorage.session,"class":localStorage.class,"stream":localStorage.stream
    }).map(res => res.json().map((subjects:Subjects) => new Subjects().deserialize(subjects)))

  }
  getTeacherSubjects(): Observable<Subjects>{
    console.log(localStorage.teacher_id);
    return  this.http.post(localStorage.urlpath+'SubjectsOfTeacher' ,{ "client":localStorage.client_id,"teacher_id":localStorage.teacher_id,"session":localStorage.session
  }).map(res => res.json().map((subjects:Subjects) => new Subjects().deserialize(subjects)))
  }
  getTopics(subject):Observable<Subtopic>{
 
    return this.http.post(localStorage.urlpath+'subjectTopicSubTopics' ,{ "subject":subject,"session":localStorage.session,"class_name":localStorage.class,"stream":localStorage.stream,"client":localStorage.client_id
  }).map(res =>   { if(res.status>=200 || res.status<300){console.log(res); return res.json().map((subtopic:Subtopic) => new Subtopic().deserialize(subtopic))}
else{
      console.log(res.status);
      return res.status;
}})


  }

  

 

  

}