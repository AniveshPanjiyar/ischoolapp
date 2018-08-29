
export class Homework   implements Deserializable {

    record_id: Number;
    teaching_date: Date;
    period: number;
    unit_no:number;
    subject: String;
    sub_subject: String;
    teacher_id: String;
    main_points: String;
    assignments:String;
    session:String;
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
}
}


export interface Deserializable {
    deserialize(input: any): this;
  }

  export class Errors {
    errors: {[key:string]: string} = {};
  }



 