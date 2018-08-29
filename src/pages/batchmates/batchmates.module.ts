import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BatchmatesPage } from './batchmates';
import {BatchmatesserviceProvider} from './batchmatesservice';
import {BatchmatesdetailModule} from'./batchmatesdetail/batchmatesdetail.module';

@NgModule({
  declarations: [
    BatchmatesPage,
    
  ],
  imports: [
    BatchmatesdetailModule,
    IonicPageModule.forChild(BatchmatesPage),
  ],
  entryComponents:[
    BatchmatesPage,

  ],
  exports:[
    BatchmatesPage,
    
  ],
  providers:[
    BatchmatesserviceProvider
  ]
})
export class BatchmatesPageModule {}
