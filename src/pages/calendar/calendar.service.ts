import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import{eventScheduled} from './calendar.model';
import 'rxjs/add/operator/map';
import{CacheService} from 'ionic-cache';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CircularService {
 

  client_id=localStorage.client_id;


  constructor(public http: Http,public cache:CacheService) {
    
  }

  fetchMonthlyevents(year,month):Observable<eventScheduled[]>
  {
    let req=  this.http.post(localStorage.urlpath+'listMonthlyCalendar', { "client":localStorage.client_id, "year": year,"month":month
}).map(res => res.json().map((events:eventScheduled) => new eventScheduled().deserialize(events)));

 let data=this.cache.loadFromObservable(year.toString()+'/'+month.toString(),req);
 return data
  }

  
  listSessionCalendar(session):Observable<eventScheduled[]>
  {
    let req2=  this.http.post(localStorage.urlpath+'listSessionCalendar', { "client":localStorage.client_id, "session": session,
}).map(res => res.json().map((events:eventScheduled) => new eventScheduled().deserialize(events)));

 let data=this.cache.loadFromObservable(session.toString(),req2);
 return data
  }

  listHolidays(session):Observable<eventScheduled[]>
  {
     let req3=  this.http.post(localStorage.urlpath+'listHolidays', { "client":localStorage.client_id, "session": session,
}).map(res => res.json().map((holidays_list:eventScheduled) => new eventScheduled().deserialize(holidays_list)));
console.log(req3);
 //let data=this.cache.loadFromObservable(session.toString(),req3);
 return req3;
  }

}