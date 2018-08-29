import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Healthstatus} from './healthstatusmodel'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HealthstatusserviceProvider {




  constructor(public http: Http) {
  }


gethealthstatusdetail(): Observable<Healthstatus>{
    
   return this.http.post(localStorage.urlpath+'getStudentHealthStatus' ,  {"student_id":localStorage.studentdetail.student_id,"session":localStorage.studentdetail.session,"client":localStorage.client_id

   }).map(res => res.json()[0]);
  }

}
