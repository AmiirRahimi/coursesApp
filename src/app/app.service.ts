
import { Injectable } from '@angular/core';
import { CourseModel } from './core/models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _courses: Array<CourseModel> = []

  constructor(private _http: HttpClient) {}

  fetchCourses():Observable<any>{
    return this._http.get('/assets/API/db.json')
  }

  setCourses(courses: Array<CourseModel>){
    this._courses = courses
  }

  getCourses(){
    return this._courses
  }

}
