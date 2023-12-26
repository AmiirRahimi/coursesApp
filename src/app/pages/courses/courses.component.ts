import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CourseCardComponent } from '../../shared/components/course-card/course-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [HttpClientModule,CourseCardComponent, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  providers:[CoursesService]
})
export class CoursesComponent implements OnInit {

  public courses: any

  constructor(private _courseService: CoursesService){}

  ngOnInit(): void {
    this._courseService.getCourses().subscribe(res => {
      this.courses = res.courses
      console.log(this.courses);
      
    })
  }
}
