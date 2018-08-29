import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlpscorePage } from './glpscore';

@NgModule({
  declarations: [
    GlpscorePage,
  ],
  imports: [
    IonicPageModule.forChild(GlpscorePage),
  ],
})
export class GlpscorePageModule {}
