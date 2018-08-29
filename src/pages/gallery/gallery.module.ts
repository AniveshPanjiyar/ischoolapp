import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryPage } from './gallery';
import{AlbumimagesPage} from '../gallery/albumimages/albumimages'
import {AlbumsPage} from '../gallery/albums/albums'
import {GalleryService} from './galleryservice'

@NgModule({
  declarations: [
    GalleryPage,
    AlbumimagesPage,
    AlbumsPage

  ],
  imports: [
    IonicPageModule.forChild(GalleryPage),
  ],
  exports:[
    GalleryPage,
    AlbumimagesPage,
    AlbumsPage

  ],
  entryComponents:[
    GalleryPage,
    AlbumimagesPage,
    AlbumsPage
  ],
  providers:[
    GalleryService
  ]
})
export class GalleryPageModule {}
