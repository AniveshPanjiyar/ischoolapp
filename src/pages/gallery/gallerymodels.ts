

export class GalleryRandomImage implements Deserializable{

    title: String;
    image_path: String;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
}}
export interface Deserializable {
    deserialize(input: any): this;
  }

  export class Albumlist implements Deserializable{

    album_id: String;
    album_name:  String;
    album_image: String;
    image_count:  String;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
  }}

  export class AlbumImages implements Deserializable{

    image_id: String;
    image_path: String;
    image_file_name: String;
    description: String;
    created_date: String;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;

  }}


