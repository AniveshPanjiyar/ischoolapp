import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Circulars} from './circularmodel'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CircularService {

  client_id=localStorage.client_id;

  constructor(public http: Http) {
    
   
  }

  getCircular(): Observable<Circulars>{
      return  this.http.post(localStorage.urlpath+'ListNoticesOfMonth', {
        "client":this.client_id
      }).map(res => res.json().map((circulars:Circulars) => {
        console.log(circulars);
        return new Circulars().deserialize(circulars)}))

  }

  

}