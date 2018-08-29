export class PollsQuestion{

msg:String;
submitted:Question[];
not_submitted:Question[];
}




export class Question{

    question:String;
    related_dept:String;
    poll_id:String;
    poll_schedule_id:String;
    options:Options;
}

export class Options{
    option_id:String; 
    value: String;
}

export class PollResult  implements Deserializable{
    option_id:Number; 
    count:Number; 
    perc: Number;
       deserialize(input: any) {
        Object.assign(this, input);
        return this;
}
}
export class PollResult2  implements Deserializable{
    count:any; 
    perc: any;
    
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
}
}
export interface Deserializable {
    deserialize(input: any): this;
  }

