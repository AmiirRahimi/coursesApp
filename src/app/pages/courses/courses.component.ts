import { Component, OnDestroy, OnInit } from '@angular/core';
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
  providers:[AppService]
})
export class CoursesComponent implements OnInit {

  private _subscription: Subscription[] = []
  public courses!: Array<CourseModel>

  constructor(private _appService: AppService){}

  ngOnInit(): void {
  }

  getCourses(){
    this.courses = this._appService.getCourses()
  }
}
