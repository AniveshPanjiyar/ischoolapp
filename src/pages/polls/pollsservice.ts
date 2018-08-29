import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {PollsQuestion} from './pollsmodel'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PollsService {

  client_id=localStorage.client_id;

  constructor(public http: Http) {
    
  }

  getPollsQuestion(): Observable<PollsQuestion>{
      return  this.http.post(localStorage.urlpath+'pollQuestion' ,{"login_id":localStorage.login_id, "client":localStorage.client_id
    }).map(res => res.json())
  }

  

}