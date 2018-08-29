
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {News} from './newsmodel'

import {_throw} from 'rxjs/observable/throw';


import { catchError, retry } from 'rxjs/operators';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsService {

  client_id=localStorage.client_id;
  studentdetail;
  toastoption;

  constructor(public http: HttpClient) {
    
   this.studentdetail=JSON.parse(localStorage.getItem('studentdetail'));
  }

  getNews(){
      return  this.http.post<News>(localStorage.urlpath+'listNews' ,{ "session": localStorage.session,"client": localStorage.client_id
    }).pipe(
      retry(3),
      catchError(this.handleError)
    ); 
   
    

  }
  countnews(){
    return this.http.post(localStorage.urlpath+'countNews' ,{ "session": localStorage.session,"client": localStorage.client_id
  }).pipe(
    retry(3),
    catchError(this.handleError)
  ); 
 
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