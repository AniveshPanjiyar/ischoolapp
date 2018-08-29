import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BatchmatesdetailPage } from './batchmatesdetail';

@NgModule({
  declarations: [
    BatchmatesdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BatchmatesdetailPage),
  ],
  exports: [
    BatchmatesdetailPage,
    ],
  entryComponents:[
    BatchmatesdetailPage,
  ],
})
export class BatchmatesdetailModule {}
