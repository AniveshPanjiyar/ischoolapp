export class Subjects implements Deserializable{
    
    session: String;
    class: String;
    section: String;
    stream: String;
    subjec: String;
    sub_subject: String;
    teacher_id:String;
    alternate_teacher_id:String;
    theory_period_week: String;
    practical_period_week: String;
    period_week:String;
    period_year: String;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}


export class Subtopic  implements Deserializable{

    record_id: String;
    session:String;
    csss_id: String;
    topic_id: String;
    topic: String;
    topic_description: String;
    search_tag: String;
    theory_duratio: String;
    practical_duration: String;
    wtg_to_subject: String;
    teaching_order:String;
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
     
} 
}

export interface Deserializable {
    deserialize(input: any): this;
  }
