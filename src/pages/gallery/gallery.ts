import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlbumsPage } from './albums/albums';
import {GalleryService} from './galleryservice'
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  circularcard;
  error;
  toastoption;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,private toast:ToastController,public galleryService:GalleryService) {
    this.getRandomImage();
  }
  getRandomImage(){
   this.galleryService.getRandomimages().subscribe(data => {
        this.circularcard= data;
        
        console.log(this.circularcard);
       
  },
        
    error => {
      this.error=error;
      this.toastoption={
        message: this.error,
        duration: 3000

      }
      this.toast.create(this.toastoption).present();
     
    });
   
 
  }
  

  openalbumslist(){

    this.navCtrl.push(AlbumsPage);
  
  }

  


  
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
