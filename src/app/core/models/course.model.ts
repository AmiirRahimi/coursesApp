export class CourseModel{
  id:            number                  | undefined;
  title:         string                  | undefined;
  instructor:    InstructorModel         | undefined;
  description:   string                  | undefined;
  duration:      string                  | undefined;
  level:         string                  | undefined;
  num_students:  number                  | undefined;
  price:         number                  | undefined;
  rating:        number                  | undefined;
  tags:          number                  | undefined;

  constructor(obj: Partial<CourseModel>){
   Object.assign(this, obj)
  }
}

class TagsModel{
  name:          string  | undefined;
  description:   string  | undefined;
 }
class InstructorModel{
  name:          string  | undefined;
  email:         string  | undefined;
 }