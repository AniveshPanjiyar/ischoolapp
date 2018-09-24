export class Circulars  {

    notice_id: String;
    notice_dept: String;
    headline:String;
    notice_text: String;
    issue_date: String;
    image_path: String;
    

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
}}

//Test to push on github