import { Time } from "@angular/common";


export class Schedule implements Deserializable{
    period:Array<Periods>;
    tt:TimeTable;
    shift:String;
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}

export class TeacherSchedule implements Deserializable{
    shift:Array<Shift>;
    period:shiftperiod;
    tt:TeacherTimeTable1;
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}
export class Shift implements Deserializable{
    shift:String; 
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }        
}
export class shiftperiod implements Deserializable{
    shift:Array<Periods>; 
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }  
          
}
export class Periods implements Deserializable{
      period:number;  
      period_name:String; 
      time_start: String; 
      time_end:String;
      shift:String; 
      deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }  
            
}


export class TeacherTimeTable1 implements Deserializable{
  shift:period_id;
  deserialize(input: any) {
      Object.assign(this, input);
      return this;
  }
  
}
export class TimeTable implements Deserializable{
    day:period_id;
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
    
}

export class period_id implements Deserializable{
    period:Array<PeriodTimetable>;
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}


export class PeriodTimetable implements Deserializable{
   
          session_id: Number;
          shift: String;
          day:Number; 
          period:Number;
          end_period:Number;
          session_date: Date;
          time_start: Time;
          time_end: Time;
          class: String;
          section:String;
          stream: String;
          subject: String;
          sub_subject: String;
          topic: String;
          teacher_id: String;
          alternate_teacher_id:String;
          classroom: String;
          unit_test: String;
          if_combined: String;
          class_type: String;
          for_group:String;
          allocation_type: String;
          conducted: Boolean;
          teacher_image_path:String;
          deserialize(input: any) {
            Object.assign(this, input);
            return this;}
}





export interface Deserializable {
    deserialize(input: any): this;
  }


