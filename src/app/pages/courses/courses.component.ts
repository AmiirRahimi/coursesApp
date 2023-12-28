import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CourseCardComponent } from '../../shared/components/course-card/course-card.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CourseModel } from '../../core/models/course.model';
import { AppService } from '../../app.service';
import { SharedDataService } from '../../core/services/shared-data.service';
import { CourseFormComponent } from '../../shared/components/course-form/course-form.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [HttpClientModule,CourseCardComponent, CommonModule,CourseFormComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit,OnDestroy {

  public courses: Array<CourseModel> = []
  private _subscription: Subscription[] = []

  constructor(
    private _appService: AppService,
    public sharedDataService: SharedDataService,
    ){}

  ngOnInit(): void {
    this.getCourses()
    this.setHeaderTitle()
  }

  setHeaderTitle(){
    this.sharedDataService.setHeaderTitle('Courses')
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
