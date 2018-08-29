import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import {CircularsPage} from './circulars'
import {CircularService} from './circularservice'


@NgModule({
  declarations: [
    
    CircularsPage,
 

  ],
  imports: [
    IonicPageModule.forChild(CircularsPage),
  ],
  exports:[
    
    CircularsPage,
  

  ],
  entryComponents:[
    
    CircularsPage,
   
  ],
  providers:[CircularService
   
  ]

  
})
export class CircularsPageModule {}
