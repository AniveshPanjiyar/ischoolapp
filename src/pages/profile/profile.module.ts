import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';

import { ErrorHandler } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProfilePage,
    
  
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    ComponentsModule
   
  ],
  exports:[],

  entryComponents: []
    })
export class ProfilePageModule { }
