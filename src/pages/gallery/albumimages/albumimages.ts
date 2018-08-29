import { Component } from '@angular/core';
import {  NavController, NavParams ,ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import {GalleryService} from '../galleryservice'

/**
 * Generated class for the AlbumimagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-albumimages',
  templateUrl: 'albumimages.html',
})
export class AlbumimagesPage {
  galleryType = 'regular';
  album_id:string;
  album_name:string;
  albumimages;
  error;
  toastoption;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http ,private toast:ToastController,public galleryService:GalleryService) {
    var date2 = new Date('1995-12-17T03:24:00');
    console.log(date2);

    this.album_id=this.navParams.get('album_id');
    this.album_name=this.navParams.get('album_name');
    this.getalbumimages(this.album_id);
  }

  
    getalbumimages(album_id){
     
      this.galleryService.getAlbumImages(album_id).subscribe(data => {
    this.albumimages = Object.keys(data).map(key => {
          return data[key];
      })
  
      },error => {
        this.error=error;
        this.toastoption={
          message: this.error,
          duration: 3000
  
        }
        this.toast.create(this.toastoption).present();
       
      });
    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumimagesPage');
  }

}
