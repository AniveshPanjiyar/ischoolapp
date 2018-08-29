import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {GalleryRandomImage,Albumlist,AlbumImages} from './gallerymodels'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the BatchmatesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GalleryService {

  client_id=localStorage.client_id;

  constructor(public http: Http) {
    
   
  }

  getRandomimages(): Observable<GalleryRandomImage>{
      return  this.http.post(localStorage.urlpath+'randomLatestImages' ,{
        "client": localStorage.client_id
        }).map(res => res.json().map((galleryRandomImage:GalleryRandomImage) => new GalleryRandomImage().deserialize(galleryRandomImage)))

  }

  getAlbumList(): Observable<Albumlist>{
    return  this.http.post(localStorage.urlpath+'getAlbumList' ,{ "client": localStorage.client_id
}).map(res => res.json().map((albumlist:Albumlist) => new Albumlist().deserialize(albumlist)))

}

getAlbumImages(album_id): Observable<GalleryRandomImage>{
    return  this.http.post(localStorage.urlpath+'getAlbumImages' ,{ "client": localStorage.client_id,"album_id":album_id
}).map(res => res.json().map((galleryRandomImage:GalleryRandomImage) => new GalleryRandomImage().deserialize(galleryRandomImage)))

}

  

}