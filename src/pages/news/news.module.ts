import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import {NewsPage} from './news';
import {NewsService} from './newsServices';

import {NewsdetailPage} from './newsdetail/newsdetail';

@NgModule({
  declarations: [
    
    NewsPage,
     NewsdetailPage

  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
  ],
  exports:[
    
    NewsPage,
    NewsdetailPage

  ],
  entryComponents:[

    NewsPage,
    
    NewsdetailPage
  ],
  providers:[NewsService
   
  ]

  
})
export class NewsPageModule {}
