import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeesPage } from './fees';
import { FeeService } from './feeservice';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    FeesPage,
  ],
  imports: [
    IonicPageModule.forChild(FeesPage),
  ],
  exports : [FeesPage],
  providers :[FeeService,InAppBrowser]
})
export class FeesPageModule {}
