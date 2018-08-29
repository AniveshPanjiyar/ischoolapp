import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlbumimagesPage } from '../albumimages/albumimages';
import {GalleryService} from '../galleryservice'

/**
 * Generated class for the AlbumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html',
})
export class AlbumsPage {
  albumlist;
  error;
  toastoption;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, private toast:ToastController,public galleryService:GalleryService) {
    this.getalbumslist();
  }


  getalbumslist(){
    this.galleryService.getAlbumList().subscribe(data => {
  this.albumlist = Object.keys(data).map(key => {
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

openalbumimages(album_id){
  this.navCtrl.push(AlbumimagesPage,{album_id});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumsPage');
  }

}
