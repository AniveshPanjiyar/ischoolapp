import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CacheModule} from 'ionic-cache'

import { HttpClientModule } from '@angular/common/http';



import {WelcomePageModule} from '../pages/login/welcome/welcome.module'
import {LoginPageModule } from '../pages/login/login.module';

import {HomePage} from '../pages/home/home';
import {ProfilePageModule} from '../pages/profile/profile.module'

import {BatchmatesPageModule} from '../pages/batchmates/batchmates.module'
import {NewsPageModule} from '../pages/news/news.module'
import {CircularsPageModule} from '../pages/circulars/circulars.module'
import {CalendarModule} from '../pages/calendar/calendar.module'
import {EventschedulePageModule} from '../pages/eventschedule/eventschedule.module'

import {GalleryPageModule} from '../pages/gallery/gallery.module'
import {PollsPageModule} from '../pages/polls/polls.module'
import {QuizPageModule} from '../pages/quiz/quiz.module'

import {SyllabusPageModule} from '../pages/syllabus/syllabus.module'
import {SchedulePageModule} from '../pages/schedule/schedule.module'
import {HomeworksPageModule} from '../pages/homeworks/homeworks.module'
import {AttendancePageModule } from '../pages/attendance/attendance.module'
import {ProgressreportPageModule} from '../pages/progressreport/progressreport.module' 

import {FeesPageModule} from '../pages/fees/fees.module'
import {HealthstatusPageModule} from '../pages/healthstatus/healthstatus.module'
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    MyApp,
    HomePage
  
  ],
  imports: [
    BrowserModule,
    
    
    HttpModule ,
    LoginPageModule,
    NewsPageModule,
    CircularsPageModule,
    HomeworksPageModule,
    BatchmatesPageModule,
    PollsPageModule,
    ProfilePageModule,
    GalleryPageModule,
    CalendarModule,
    QuizPageModule,
    HealthstatusPageModule,
    EventschedulePageModule,
    WelcomePageModule,
    SyllabusPageModule,
    SchedulePageModule,
    AttendancePageModule, 
    ProgressreportPageModule,
    HttpClientModule,
    ComponentsModule,
    CacheModule.forRoot({ keyPrefix: 'my-app-cache' }),

    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    FeesPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    
   
  ],
  providers: [
    InAppBrowser,
    
    StatusBar,
    SQLitePorter,
    SQLite,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler },
   
    
  ],
  exports:[
      
  ]
})
export class AppModule {}
