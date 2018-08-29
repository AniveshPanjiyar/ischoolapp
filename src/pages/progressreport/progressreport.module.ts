import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressreportPage } from './progressreport';
import { ProgressreportcardPage} from './progressreportcard/progressreportcard';
import { AddmarksPage} from './addmarks/addmarks';

@NgModule({
  declarations: [
    ProgressreportPage,
    ProgressreportcardPage
  ],
  imports: [
    IonicPageModule.forChild(ProgressreportPage),
  ],
  exports:[
    ProgressreportPage,
    ProgressreportcardPage
  ],
  entryComponents:[
    ProgressreportPage,
    ProgressreportcardPage
  ]
})
export class ProgressreportPageModule {}
