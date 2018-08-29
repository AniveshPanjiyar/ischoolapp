import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Schedule} from './schedule.model'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScheduleService {

  client_id=localStorage.client_id;
  studentdetail;
 

  constructor(public http: Http) {
    
   this.studentdetail=JSON.parse(localStorage.getItem('studentdetail'));
  }

  getTimeTable(daySelected): Observable<Schedule>{
      return  this.http.post(localStorage.urlpath+'getClassTimetableOnDay' ,{"class_name":localStorage.class,"section":localStorage.section,"stream":localStorage.stream, "client": localStorage.client_id,"session":localStorage.session,"day":daySelected
    }).map(res => res.json())

}

getTeacherTodayTimeTable(teacher_id,daySelected): Observable<Schedule>{
  return  this.http.post(localStorage.urlpath+'getTeacherTodayTimetable' ,{"client": localStorage.client_id,"session":localStorage.session,"teacher_id":teacher_id,"day":daySelected
}).map(res => res.json())
}
  
getTeacherWeeklyTimeTable(teacher_id): Observable<Schedule>{
  return  this.http.post(localStorage.urlpath+'getTeacherWeekTimetable' ,{"client": localStorage.client_id,"session":localStorage.session,"teacher_id":teacher_id
}).map(res => res.json())

}

}