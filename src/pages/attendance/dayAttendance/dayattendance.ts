import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import * as _ from "lodash";
import {dateObj,monthsDayAttendance,AbsentDays,SchoolOpened,MarkedDays} from './dayattendance.model'
import {DayAttendanceService} from'./dayattendance.service'
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage } from '@ionic/storage';
@IonicPage({
    priority:'high'
})
@Component({
    selector: 'page-dayAttendance',
    templateUrl: 'dayAttendance.html',
   
})

export class DayAttendance {
    
    monthAttendance:monthsDayAttendance;
    school_opened:Array<SchoolOpened>;
    attendance_marked:Array<MarkedDays>;
    absentism:Array<AbsentDays>;
    holidays;
       
      
  

    displayYear: number;
    displayMonth: number;  
   
      
    dateArray: Array<dateObj> = []; // Array for all the days of the month */
    weekArray = []; // Array for each row of the calendar */
    lastSelect: number = 0; // Record the last clicked location */
    weekHead: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 

    constructor(public navCtrl: NavController, public http: Http,private storage: Storage, public navParams: NavParams,public modalCtrl: ModalController,private alertctrl:AlertController,public dayAttendanceService:DayAttendanceService) {
        this.displayYear=navParams.get('year'); 
        console.log(this.displayMonth)
        this.displayMonth=navParams.get('month'); 
       
        this.fetchevents(this.displayYear,this.displayMonth);
       
        
        
        
    }

    
    fetchevents( year,month){

       this.dayAttendanceService.fetchevents(year,month).subscribe(data =>
        {
            console.log(data);
            this.Showevents(data);
          
        },error=>{
            console.log(error);
        });
        
    }
    
   
    Showevents(data){
       
        this.monthAttendance=data;
        console.log(this.monthAttendance);
        this.school_opened=this.monthAttendance.school_opened;
        this.attendance_marked=this.monthAttendance.at_marked;
        this.absentism=this.monthAttendance.absent;
        this.holidays=[];  //empty Holiday String
        
        
            for (var i=0 ;i< this.school_opened.length;i++) {
                    
                if (new Date(this.school_opened[i].opening_date).getFullYear() == this.displayYear 
                    && new Date(this.school_opened[i].opening_date).getMonth()==this.displayMonth){
                            console.log(new Date(this.school_opened[i].opening_date).getFullYear());
                                this.holidays.push(this.school_opened[i]);  
                }
             }     

             this.createMonth(this.displayYear,this.displayMonth-1);

       
    }

    checkSchoolOpen(year:Number, month:Number, date:Number) {
        var i = 0, len = this.school_opened.length;
        for (i=0; i < len; i++) {
            if(
                new Date(this.school_opened[i].opening_date).getFullYear() == year
                && new Date(this.school_opened[i].opening_date).getMonth()  == month && 
                new Date(this.school_opened[i].opening_date).getDate() == date)
             {
                return true;
            }
        }
       return false;
    }

    checkMarkedDay(year:Number, month:Number, date:Number){
        var i = 0, len = this.attendance_marked.length;
        for (i=0; i < len; i++) {
            if(
                new Date(this.attendance_marked[i].schoolopen_date).getFullYear() == year
                && new Date(this.attendance_marked[i].schoolopen_date).getMonth()  == month && 
                new Date(this.attendance_marked[i].schoolopen_date).getDate() == date)
             {
                return true;
            }
        }
        
        return false;

    }

    checkAbsentDay(year:Number, month:Number, date:Number){

        var i = 0, len =this.absentism.length;
        for (i=0; i < len; i++) {
            if(
                new Date(this.absentism[i].schoolopen_date).getFullYear() == year
                && new Date(this.absentism[i].schoolopen_date).getMonth()  == month && 
                new Date(this.absentism[i].schoolopen_date).getDate() == date)
             {
                return true;
            }
        }
        return false;

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
                        date: null,
                        isSelect: false,
                        
                    })
                } else {
                    this.dateArray.push({
                        year: year,
                        month: month - 1,
                        date: null,
                        isSelect: false,
                        
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
                isSelect: false,
                isThisMonth:true,
                school_open: (this.checkSchoolOpen(year, month, i + 1)) ? true : false,
                marked: (this.checkMarkedDay(year, month, i + 1)) ? true : false,
                absent:(this.checkAbsentDay(year, month, i + 1)) ? true : false,
            })
        }

       /*  if (this.displayYear === year && this.displayMonth === month) {
            let todayIndex = _.findIndex(this.dateArray, {
                year: this.displayYear,
                month: this.displayMonth,
                isThisMonth: true
            })
          
        } */

        // Add the number of days next month to the array, with some months showing 6 weeks and some months showing 5 weeks
        if (this.dateArray.length % 7 !== 0) {
            let nextMonthAdd = 7 - this.dateArray.length % 7
            for (let i = 0; i < nextMonthAdd; i++) {
                if (month === 11) {
                    this.dateArray.push({
                        year: year,
                        month: 0,
                        date: null,
                        isSelect: false,
                        
                    })
                } else {
                    this.dateArray.push({
                        year: year,
                        month: month + 1,
                        date: null,
                        isSelect: false,
                        
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

    
  

      
    // Select a day, click event
    daySelect(day, i, j) {
        // First clear the last click status
        this.dateArray[this.lastSelect].isSelect = false;
        // Store this clicked status
        this.lastSelect = i * 7 + j;
        this.dateArray[i * 7 + j].isSelect = true;
    }


    
  
        

  

}

