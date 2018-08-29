import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyllabusPage } from './syllabus';
import {  TeacherSubjectPage } from './teachersubject';
import {SyllabusService} from './syllabusservice'
@NgModule({
  declarations: [
    SyllabusPage,
  ],
  imports: [
    IonicPageModule.forChild(SyllabusPage),
  ],
  exports:[
    SyllabusPage,
  ],
  entryComponents:[
    SyllabusPage,
  ],
  providers:[
    SyllabusService
  ]
})
export class SyllabusPageModule {}
