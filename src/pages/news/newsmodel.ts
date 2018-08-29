
export class News   implements Deserializable {

    news_id: String;
    title: String;
    content: String;
    description: String;
    image_path:String;
    doc_path:String;
    timestamp: String;
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



 