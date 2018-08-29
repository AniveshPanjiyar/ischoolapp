import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {  TeacherSubjectPage } from './teachersubject';
import {SyllabusService} from './syllabusservice'
@NgModule({
  declarations: [
    TeacherSubjectPage],
  imports: [
    IonicPageModule.forChild(TeacherSubjectPage),
  ],
  exports:[
    TeacherSubjectPage,
  ],
  entryComponents:[
    TeacherSubjectPage,
  ],
  providers:[
    SyllabusService
  ]
})
export class SyllabusPageModule {}
