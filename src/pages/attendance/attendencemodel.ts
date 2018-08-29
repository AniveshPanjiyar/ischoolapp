export class Sessionattendance implements Deserializable{
    year: String;
    month: String;
    at_marked:Number;
    absent:Number;
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
}
}


export class Mothlyattendance{

}

export interface Deserializable {
    deserialize(input: any): this;
  }