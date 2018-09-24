import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {_throw} from 'rxjs/observable/throw';


import { catchError, retry } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http';

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
}).map(res => res.json()).pipe(
  retry(3),
  catchError(this.handleError)
); 
}

getSubjects(){
  return  this.http.post(localStorage.urlpath+'studentSubjects' ,{ "client":localStorage.client_id,"student_id":localStorage.student_id,"session":localStorage.session,"class":localStorage.class,"stream":localStorage.stream
}).map(res => res.json());

}



private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
   }

 // return an observable with a user-facing error message
  return _throw(
    'Something bad happened; please try again later.');
};

}