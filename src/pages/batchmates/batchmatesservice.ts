import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Batchmates} from './batchmatesmodel'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BatchmatesserviceProvider {
  

  constructor(public http: Http) {
    
   
  }


  getbatchmatesdetail(): Observable<Batchmates>{
    
   return this.http.post(localStorage.urlpath+'getStudentListForClassSectionStreamSession' ,  {
      "client":localStorage.client_id,"class_name":localStorage.class,"stream":localStorage.stream,"section":localStorage.section,"session":localStorage.session
      }).map(res => res.json().map((batchmates:Batchmates) => new Batchmates().deserialize(batchmates) ));
  }

}
