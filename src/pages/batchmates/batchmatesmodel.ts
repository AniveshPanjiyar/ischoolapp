
export class Batchmates   implements Deserializable {

    student_id: String;
    name: String;
    image_path: String;
    gender: String;
    date_of_birth: Date;
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
}
}


export interface Deserializable {
    deserialize(input: any): this;
  }