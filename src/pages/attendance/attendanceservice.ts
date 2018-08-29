import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Sessionattendance} from './attendencemodel'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import{CacheService} from 'ionic-cache'

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AttendanceServiceProvider {
  sessionattendence:any ;
 
  
  constructor(public http: Http,public cache:CacheService) {
    
   
  }


  getSessionAttendance(): Observable<Sessionattendance>{
    
   let req= this.http.post(localStorage.urlpath+'getAllMonthAttendanceCount' ,  {
      "client":localStorage.client_id,"session":localStorage.session,"student_id":localStorage.student_id
      }).map(res => res.json().map(( sessionattendence:Sessionattendance) => new Sessionattendance().deserialize(sessionattendence) ));

      let data=this.cache.loadFromObservable('Attendance',req);
      return data
    }

}
