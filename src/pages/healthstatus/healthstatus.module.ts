import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthstatusPage } from './healthstatus';
import {HealthstatusserviceProvider} from './healthstatusservice'
@NgModule({
  declarations: [
    HealthstatusPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthstatusPage),
  ],
  exports:[
    HealthstatusPage
  ]
,
entryComponents:[
  HealthstatusPage
],
providers:[
  HealthstatusserviceProvider
]

  
})
export class HealthstatusPageModule {}
