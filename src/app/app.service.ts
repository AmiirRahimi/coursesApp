
import { Inject, Injectable } from '@angular/core';
import { CourseModel } from './core/models/course.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _courses: BehaviorSubject<Array<CourseModel>> = new BehaviorSubject(Array(new CourseModel({})))

  constructor(@Inject(HttpClient) private _http: any) {}

  fetchCourses():Observable<any>{
    return this._http.get('/assets/API/db.json')
  }

  setCourses(courses: any){
    // localStorage.setItem('courses', JSON.stringify(courses))
    this._courses.next(courses)
  }

  getCourses(): Observable<Array<CourseModel>>{
    // const courses = JSON.parse(localStorage.getItem('courses')!)
    // if (courses) {
    //   this.setCourses(courses)
    // }
    return this._courses.asObservable()
  }

}
