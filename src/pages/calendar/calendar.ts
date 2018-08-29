import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import * as _ from "lodash";
import {singularDate,dateObj,eventScheduled} from './calendar.model'
import {CircularService} from'./calendar.service'
import { IonicPage, NavController,LoadingController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage } from '@ionic/storage';
import{CacheService} from 'ionic-cache'
import { SessioncalendarPage } from './sessioncalendar/sessioncalendar';
import { HolidaysPage } from './holidays/holidays';
@IonicPage({
    priority:'high'
})
@Component({
    selector: 'page-calendar',
    templateUrl: 'calendar.html',
   
})

export class Calendar {
    eventdate:Array<eventScheduled>=[];  
    holidays:Array<eventScheduled>;
    schoolEvents:Array<eventScheduled>=[];   
      
    currentYear: number = moment().year(); 
    currentMonth: number = moment().month(); 
    currentDate: number = moment().date(); 
    currentDay: number = moment().day(); 

    displayYear: number = moment().year(); 
    displayMonth: number = moment().month(); 
      
    dateArray: Array<dateObj> = []; // Array for all the days of the month */
    weekArray = []; // Array for each row of the calendar */
    lastSelect: number = 0; // Record the last clicked location */
    weekHead: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 

    constructor(public navCtrl: NavController, public http: Http,private storage: Storage, public navParams: NavParams,
        public modalCtrl: ModalController,private alertctrl:AlertController,public circularService:CircularService ,public events: Events,public loadingCtrl: LoadingController,public cache:CacheService) {
        console.log( this.currentYear);
        this.fetchevents(this.displayYear, this.displayMonth);
        this.today();
    }

    
    fetchevents(year,month){
        let loading = this.loadingCtrl.create({content: 'Please wait...'});
        loading.present();
       
       this.circularService.fetchMonthlyevents(year,month+1).subscribe(data =>
        {  
           this.eventdate=data;
            console.log(this.eventdate);
            this.createMonth(year, month) ;
           this.Showevents();
        },error=>{
            if(error.status==0){
                setTimeout(() => {
                    loading.dismiss();
                    alert("Connection error...");
                  }, 5000);
                
            }else{
            
            this.createMonth(year, month) ;
            this.Showevents();
            loading.dismiss();
            console.log("No Events Found");}
        },()=>loading.dismiss())
    }
    
   
    Showevents(){
       
        this.schoolEvents=this.eventdate;
        this.holidays=[];  //emoty Holiday String
        
        
            for (var i=0 ;i<this.eventdate.length;i++) {
                    
                if (new Date(this.schoolEvents[i].start_date).getFullYear() == this.displayYear 
                    && new Date(this.schoolEvents[i].start_date).getMonth()==this.displayMonth){
                            console.log(new Date(this.schoolEvents[i].start_date).getFullYear());
                                this.holidays.push(this.schoolEvents[i]);  
                }
             }     
             
    }

  
    createMonth(year: number, month: number) 
    {
      
        this.dateArray = []; // Clear last month's data
        this.weekArray = []; // Clear week data
        let firstDay;
        let preMonthDays; // The number of days for the previous month
        let monthDays; // The number of days for the month
        let weekDays: Array<dateObj> = [];

        firstDay = moment({ year: year, month: month, date: 1 }).day();
        
       
        // The number of days last month
        if (month === 0) {
            preMonthDays = moment({ year: year - 1, month: 11 }).daysInMonth();
        } else {
            preMonthDays = moment({ year: year, month: month - 1 }).daysInMonth();
        }
        // The number of days this month
        monthDays = moment({ year: year, month: month }).daysInMonth();

        // PREVIOUS MONTH
        // Add the last few days of the previous month to the array
        if (firstDay !== 7) { // Sunday doesn't need to be shown for the previous month
            let lastMonthStart = preMonthDays - firstDay + 1; // From the last few months start
            for (let i = 0; i < firstDay; i++) {
                if (month === 0) {
                    this.dateArray.push({
                        year: year,
                        month: 11,
                        date: lastMonthStart + i,
                        isThisMonth: false,
                        isToday: false,
                        isSelect: false,
                        hasEvent: (this.isInEvents(year, 11, lastMonthStart + i)) ? true : false
                    })
                } else {
                    this.dateArray.push({
                        year: year,
                        month: month - 1,
                        date: lastMonthStart + i,
                        isThisMonth: false,
                        isToday: false,
                        isSelect: false,
                        hasEvent: (this.isInEvents(year, month - 1, lastMonthStart + i)) ? true : false,
                    })
                }

            }
        }

        // Add the numeral for this month to the array
        for (let i = 0; i < monthDays; i++) {
            this.dateArray.push({
                year: year,
                month: month,
                date: i + 1,
                isThisMonth: true,
                isToday: false,
                isSelect: false,
                hasEvent: (this.isInEvents(year, month, i + 1)) ? true : false,
            })
        }

        if (this.currentYear === year && this.currentMonth === month) {
            let todayIndex = _.findIndex(this.dateArray, {
                year: this.currentYear,
                month: this.currentMonth,
                date: this.currentDate,
                isThisMonth: true
            })
            this.dateArray[todayIndex].isToday = true;
        }

        // Add the number of days next month to the array, with some months showing 6 weeks and some months showing 5 weeks
        if (this.dateArray.length % 7 !== 0) {
            let nextMonthAdd = 7 - this.dateArray.length % 7
            for (let i = 0; i < nextMonthAdd; i++) {
                if (month === 11) {
                    this.dateArray.push({
                        year: year,
                        month: 0,
                        date: i + 1,
                        isThisMonth: false,
                        isToday: false,
                        isSelect: false,
                        hasEvent: (this.isInEvents(year, 0, i + 1)) ? true : false,
                    })
                } else {
                    this.dateArray.push({
                        year: year,
                        month: month + 1,
                        date: i + 1,
                        isThisMonth: false,
                        isToday: false,
                        isSelect: false,
                        hasEvent: (this.isInEvents(year, month + 1, i + 1)) ? true : false,
                    })
                }

            }
        }

        // All date data is now added to the dateArray array
        // Insert the date data into the new array every seven days
        for (let i = 0; i < this.dateArray.length / 7; i++) {
            for (let j = 0; j < 7; j++) {
                weekDays.push(this.dateArray[i * 7 + j]);
            }
            this.weekArray.push(weekDays);
            weekDays = [];
        }
    }

    
    isInEvents(year, month, date) {
        var i = 0, len = this.eventdate.length;
        for (i=0; i < len; i++) {
            if(
                new Date(this.eventdate[i].start_date).getFullYear()  == year
                && new Date(this.eventdate[i].start_date).getMonth()  == month && 
                new Date(this.eventdate[i].start_date).getDate() == date)
             {
                return true;
            }
        }
        return false;
    }


      
   

    back() {
        // Decrementing the year if necessary
       
        if (this.displayMonth === 0) {
            this.displayYear--;
            this.displayMonth = 11;
        } else {
            this.displayMonth--;
        }
     
      this.fetchevents(this.displayYear, this.displayMonth);

    }

    forward() {
        
        // Incrementing the year if necessary
        if (this.displayMonth === 11) {
            this.displayYear++;
            this.displayMonth = 0;
        } else {
            this.displayMonth++;
        }
       
        
        this.fetchevents(this.displayYear, this.displayMonth);
      
    }

    // Select a day, click event
    daySelect(day, i, j) {
        // First clear the last click status
        this.dateArray[this.lastSelect].isSelect = false;
        // Store this clicked status
        this.lastSelect = i * 7 + j;
        this.dateArray[i * 7 + j].isSelect = true;
    }


    
   /*  */
    // Jump to today
    today(){
        this.displayYear = this.currentYear;
        this.displayMonth = this.currentMonth;
        this.createMonth(this.currentYear, this.currentMonth);

        // Mark today as a selection
        let todayIndex = _.findIndex(this.dateArray, {
            year: this.currentYear,
            month: this.currentMonth ,
            date: this.currentDate,
            isThisMonth: true
        })
        this.lastSelect = todayIndex;
        this.dateArray[todayIndex].isSelect = true;
    }
    listsessionCalendar(session: string){
        this.navCtrl.push(SessioncalendarPage, {session});
      };
    
      listholidays(session: string){
        this.navCtrl.push(HolidaysPage, {session});
      };
    /* checkarray(period){
        return Array.isArray(this.daytimetable[period]);
      } */



    ngOnChanges(){
        this.createMonth(this.displayYear, this.displayMonth);
    }

}

