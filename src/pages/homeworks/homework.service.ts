import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeworkServices {

  studentdetail;
  constructor(public http: Http) {
    
   this.studentdetail=JSON.parse(localStorage.getItem('studentdetail'));
  }
 
  getHomework(subject_selected)
  {  return this.http.post(localStorage.urlpath+'subjectHomework' ,{ "session": localStorage.session,"client": localStorage.client_id,"subject":subject_selected,
  "class_name": localStorage.class,"stream": localStorage.strean
}).map(res => res.json())
}

getSubjects(){
  return  this.http.post(localStorage.urlpath+'studentSubjects' ,{ "client":localStorage.client_id,"student_id":localStorage.student_id,"session":localStorage.session,"class":localStorage.class,"stream":localStorage.stream
}).map(res => res.json());

}



}