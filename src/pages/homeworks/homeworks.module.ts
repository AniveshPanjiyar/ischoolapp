import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeworksPage } from './homeworks';
import {HomeworkServices} from './homework.service'
import { ComponentsModule } from '../../components/components.module';
import {AddhomeworkPage} from './addhomework/addhomework';


@NgModule({
  declarations: [
    HomeworksPage,
    
  ],
  imports: [
    IonicPageModule.forChild(HomeworksPage),
    ComponentsModule
  ],
  exports:[
    HomeworksPage,
    
  ],
  entryComponents:[
    HomeworksPage
  ],
  providers:[
    HomeworkServices
  ]

})
export class HomeworksPageModule {}
