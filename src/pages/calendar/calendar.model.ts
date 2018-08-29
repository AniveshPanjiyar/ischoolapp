export class singularDate {
    year: number;
    month: number;
    date: number;
    event:string;
}

// Each grid item of a calendar
export class dateObj {
    year: number;
    month: number;
    date: number; // What's the date?
    isThisMonth: boolean; // Is this the currently selected month?
    isToday?: boolean;
    isSelect?: boolean;
    hasEvent?: boolean;
} 
export class eventScheduled {
    event_id:String;
    event: String;
    description: String;
    location:String;
    start_date: Date;
    end_date: Date;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;}
}