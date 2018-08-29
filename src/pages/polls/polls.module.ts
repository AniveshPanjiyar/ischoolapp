import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PollsPage } from './polls';
import {PollsService} from './pollsservice'
import {SwipeSegmentDirective} from './swipeSegmentDirective'
@NgModule({
  declarations: [
    PollsPage,
    SwipeSegmentDirective
  ],
  imports: [
    IonicPageModule.forChild(PollsPage),
  ],
  exports:[
    PollsPage
  ],
  entryComponents:[
    PollsPage

  ],
  providers:[
    PollsService
  ]

})
export class PollsPageModule {}
