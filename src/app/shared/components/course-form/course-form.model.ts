import { prop } from "@rxweb/reactive-form-validators";

export class CourseFormModel{

  @prop()
  title:         string                  | undefined;

  @prop()
  instructorName:    object                  | undefined;

  @prop()
  instructorEmail:    object                  | undefined;

  @prop()
  description:   string                  | undefined;

  @prop()
  duration:      string                  | undefined;

  @prop()
  level:         string                  | undefined;

  @prop()
  num_students:  number                  | undefined;

  @prop()
  price:         number                  | undefined;

  @prop()
  rating:        number                  | undefined;

  @prop()
  tags:          any                     | undefined;

  toApiModel(){ 
   return {
    title:         this.title,
    instructor: {
     name:         this.instructorName,
     email:        this.instructorEmail
    },
    description:   this.description,
    duration:      this.duration,
    level:         this.level,
    num_students:  this.num_students,
    price:         this.price,
    rating:        this.rating,
    tags:          this.tags
   }           
   
  }
}