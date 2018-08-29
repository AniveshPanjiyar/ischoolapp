import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {studentFeeDetails} from './feemodel';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeeService {
   

  constructor(public http: Http) {
   
   
  }

  getStudentFeeReceipt(): Observable<studentFeeDetails>{

      return  this.http.post(localStorage.urlpath+'getStudentFeeReceipt',{
        "client":localStorage.client_id,"session":localStorage.session,"student_id":localStorage.student_id
        }).map(res => res.json())
        

  }
 
}