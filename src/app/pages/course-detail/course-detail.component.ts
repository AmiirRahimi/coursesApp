import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CourseModel } from '../../core/models/course.model';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit,OnDestroy {

  public course!: CourseModel
  private _subscription: Subscription[] = []

  constructor(
    private _appService: AppService,
    private _route: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.getCourse()
  }

  ngOnDestroy(): void {
    this._subscription.forEach(sub => sub.unsubscribe())
  }

  getCourse(){
    this._route.queryParamMap.subscribe((res:any) => {
      const id = res['params']['id']
      this._appService.getCourses().subscribe((res:any) => {
        this.course = res.filter((course:any) => course.id == id)[0]
        console.log(this.course);
      })
    })
  }

}
