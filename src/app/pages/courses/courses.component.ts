import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CourseCardComponent } from '../../shared/components/course-card/course-card.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CourseModel } from '../../core/models/course.model';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [HttpClientModule,CourseCardComponent, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit,OnDestroy {

  public courses: Array<CourseModel> = []
  private _subscription: Subscription[] = []

  constructor(private _appService: AppService){}

  ngOnInit(): void {
    this.getCourses()
  }

  ngOnDestroy(): void {
    this._subscription.forEach(sub => sub.unsubscribe())
  }

  getCourses(){
   this._subscription.push(
    this._appService.getCourses().subscribe(courses => {
      this.courses = courses
    })
   )
  }
}
