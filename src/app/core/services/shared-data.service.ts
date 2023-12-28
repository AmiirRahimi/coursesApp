import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private _course: BehaviorSubject<CourseModel | {}> = new BehaviorSubject({})

  constructor() { }

  getCourse(){
    return this._course.asObservable()
  }

  setCourse(course: CourseModel){
    this._course.next(course)
  }
}
