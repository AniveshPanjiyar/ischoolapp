

// Each grid item of a calendar
export class dateObj {
    year: number;
    month: number;
    date: number; // What's the date?
    isSelect?: boolean;
    school_open?: boolean;
    marked?:Boolean;
    absent?:Boolean;
    isThisMonth?:Boolean;
} 
export class eventScheduled{
    event_id: string;
    schedule_id: string;
    event_eame: string;
    eescription:string;
    start_date:string;
    end_date: string;
    location:string;
    doc_path:string;
}


export class monthsDayAttendance{
    school_opened:Array<SchoolOpened>;
    at_marked:Array<MarkedDays>;
    absent:Array<AbsentDays>;

}

export class SchoolOpened{
    opening_date:Date;
}

export class MarkedDays{
    schoolopen_date:Date;
}

export class AbsentDays{
    session: String;
    schoolopen_date:Date;
    reason:String;
    other_reason: String;
}