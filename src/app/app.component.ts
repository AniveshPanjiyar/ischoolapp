import { Component, ViewChild } from '@angular/core';
import { Nav,Platform, MenuClose ,LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { Calendar} from '../pages/calendar/calendar';
import { CacheService } from 'ionic-cache';
//import {CacheService} from 'ionic-cache'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any=HomePage  ;
  studentdetail;
  activemodules;
   pages: Array<{icons:String ,title: string, component: any}>;

  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public events: Events,private  loadingCtrl: LoadingController,public cache: CacheService)
   {
    platform.ready().then(() => {
      // Set TTL to 12h
      cache.setDefaultTTL(60 * 60 * 12);
 
      // Keep our cached results when device is offline!
      cache.setOfflineInvalidate(false);
 
      statusBar.styleDefault();
      splashScreen.hide();
    });

    if(localStorage.module_active)
    {  if(localStorage.type=='Student')
      {  this.createStudentmenu()}
      if(localStorage.type=='Teacher')
      {  this.createTeachermenu()}
    }
    else{
    events.subscribe('app_modules:fetched', (modules)=> {

      localStorage.module_active=modules;
      if(localStorage.type=='Student')
      {  this.createStudentmenu()}
      if(localStorage.type=='Teacher')
      {  this.createTeachermenu()}
      // user and time are the same arguments passed in `events.publish(user, time)`
      
    });    
  }
      this.studentdetail=JSON.parse(localStorage.getItem('studentdetail'));
      console.log(this.studentdetail);

    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      }); 
    // used for an example of ngFor and navigation
  }

  createStudentmenu(){

    this.activemodules=JSON.parse(localStorage.module_active);
    this.pages = [
      {icons:'ios-home-outline' ,title: 'Home', component: HomePage },
      
      ];

      if(this.activemodules.st){
        this.pages.push( { icons:'contacts',title: 'Batchmates', component:'BatchmatesPage' })}
      if(this.activemodules.pg){
        this.pages.push( { icons:'ios-images-outline',title: 'Gallery', component:'GalleryPage' })}
      
        if(this.activemodules.cl){
          this.pages.push(  { icons:'ios-calendar-outline', title: 'Calendar', component :Calendar })}
       
      if(this.activemodules.tt){
        this.pages.push( { icons:'ios-apps-outline',title: 'Timetable', component:'SchedulePage' })} 
       if(this.activemodules.asp){
          this.pages.push(  { icons:'ios-bicycle-outline', title: 'Events and Tournaments', component:'EventschedulePage' })}
  
       this.pages.push( { icons:'ios-text-outline',title: 'Polls', component:'PollsPage' })
              
        if(this.activemodules.qb){
        this.pages.push( { icons:'ios-help-circle-outline',title: 'Quiz', component:'QuizPage' })}

      
        if(this.activemodules.ac){
          this.pages.push( { icons:'ios-book-outline', title: 'Subjects & Syllabus', component :'SyllabusPage' })}
      if(this.activemodules.lp){
            this.pages.push(  { icons:'ios-hand-outline',title: 'Homework', component:'HomeworksPage' })}
      if(this.activemodules.at){
        this.pages.push(  { icons:'ios-hand-outline',title: 'Attendance', component:'AttendancePage' })}
      if(this.activemodules.r){
        this.pages.push(  { icons:'ios-list-box-outline',title: 'Progress Report', component:'ProgressreportPage' })}
   
     
      if(this.activemodules.fee){
        this.pages.push( { icons:'ios-card-outline', title: 'Fees', component :'FeesPage' })}
        if(this.activemodules.ha){
          this.pages.push(  { icons:'ios-medkit-outline', title: 'Health Status', component:'HealthstatusPage' })}
  }
  
  createTeachermenu(){

    this.activemodules=JSON.parse(localStorage.module_active);
    this.pages = [
      {icons:'ios-home-outline' ,title: 'Home', component: HomePage },
      
      ];
   if(this.activemodules.ac){
            this.pages.push( { icons:'ios-book-outline', title: 'My Subjects & Class', component :'TeacherSubjectPage' })}
       
      if(this.activemodules.tt){
        this.pages.push( { icons:'ios-apps-outline',title: 'My Timetable', component:'SchedulePage' })} 
      
         if(this.activemodules.lp){
            this.pages.push(  { icons:'ios-hand-outline',title: 'Assign Homework', component:'AddhomeworkPage' })}
      if(this.activemodules.at){
        this.pages.push(  { icons:'ios-hand-outline',title: 'Mark Attendance', component:'MarkattendancePage' })}
      if(this.activemodules.r){
        this.pages.push(  { icons:'ios-list-box-outline',title: 'Add Marks & Grades', component:'AddmarksPage' })}
       
        if(this.activemodules.qb){
          this.pages.push( { icons:'ios-help-circle-outline',title: 'Assign Quiz', component:'AddquizPage' })}
      
        if(this.activemodules.cl){
            this.pages.push(  { icons:'ios-calendar-outline', title: 'Calendar', component :Calendar })}
        if(this.activemodules.pg){
          this.pages.push( { icons:'ios-images-outline',title: 'Gallery', component:'GalleryPage' })}
          this.pages.push( { icons:'ios-text-outline',title: 'Polls', component:'PollsPage' }) 
    
        //if(this.activemodules.asp){
         // this.pages.push(  { icons:'ios-bicycle-outline', title: 'Events and Tournaments', component:'EventschedulePage' })}
    }
  
 openPage(pages) {
  // Reset the content nav to have just this page
  // we wouldn't want the back button to show in this scenario
  this.nav.push(pages.component);
}

openprofile(){
this.nav.push('ProfilePage');

}

//logout
logout(){
  localStorage.loginStaus="";
  this.cache.clearAll();
 localStorage.clear();
  
  setTimeout(() => {
    let loading = this.loadingCtrl.create({content: 'Please wait...'});
    this.nav.setRoot("WelcomePage").then(()=>{loading.dismiss()})
  }, 2000);
   

    }

}



