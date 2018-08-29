import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkattendancePage } from './markattendance';

@NgModule({
  declarations: [
    MarkattendancePage,
  ],
  imports: [
    IonicPageModule.forChild(MarkattendancePage),
  ],
})
export class MarkattendancePageModule {}
