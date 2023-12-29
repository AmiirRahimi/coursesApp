import { prop } from "@rxweb/reactive-form-validators";

export class CourseFormModel{

  @prop()
  id!:             number                 | null;

  @prop()
  title!:         string                  | null;

  @prop()
  instructorName!:    object              | null;

  @prop()
  instructorEmail!:    object             | null;

  @prop()
  description!:   string                  | null;

  @prop()
  duration!:      string                  | null;

  @prop()
  level!:         string                  | null;
  
  @prop()
  num_students!:  number                  | null;

  @prop()
  price!:         number                  | null;

  @prop()
  rating!:        number                  | null;

  @prop()
  tags!:          any                     | null;

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