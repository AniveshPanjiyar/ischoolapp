import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DayAttendanceService {
 

  client_id=localStorage.client_id;

  constructor(public http: Http) {
    
   
  }

  fetchevents(year,month){
   return  this.http.post(localStorage.urlpath+'getStudentDayWiseAbsenteeismForMonthYear', { "student_id":localStorage.student_id,"session":localStorage.session,"year":year,"month":month,"client":localStorage.client_id }).map(res => res.json());




  }

  

}