import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpdeskPage } from './helpdesk';

@NgModule({
  declarations: [
    HelpdeskPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpdeskPage),
  ],
})
export class HelpdeskPageModule {}
