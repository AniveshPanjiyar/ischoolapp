export class Nextquestion {
    question:Question[];
    options:Options[];
    answer:String;
    image_path:String;
    status:Status[];
}

 export class Question {
    source:Number;
      record_id: Number;
      q_id: Number;
      question_type_id: Number;
      question_text: String;
      image:String;
      document: String;
      instructions: String;
      owner_id: String;
      is_public: Number;
       user_id: String;
 }
export class Options  {
      option_no:String;
      option_text:String;
      image: String;
}
export class Status{
    status:String;
    message: String;
}

export class Subjects 
{
    
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