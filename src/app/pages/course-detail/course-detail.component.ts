import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CourseModel } from '../../core/models/course.model';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../../core/services/shared-data.service';
import { CourseFormComponent } from '../../shared/components/course-form/course-form.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, CourseFormComponent],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit,OnDestroy {

  public course!: CourseModel
  private _subscription: Subscription[] = []

  constructor(
    private _appService: AppService,
    private _route: ActivatedRoute,
    private _router: Router,
    public sharedDataService: SharedDataService
    ){}

  ngOnInit(): void {
    this.getCourse()
    this.setHeaderItems()
  }

  setHeaderItems(){
    this.sharedDataService.setHeaderItems({title: 'Course Detail', button: 'Edit Course +'})

  }

  ngOnDestroy(): void {
    this._subscription.forEach(sub => sub.unsubscribe())
  }

  getCourse(){
    this._route.queryParamMap.subscribe((res:any) => {
      const id = res['params']['id']
      this._appService.getCourses().subscribe((res:any) => {
        this.course = res.filter((course:any) => course.id == id)[0]
        if (!this.course) {
          this._router.navigate(['../'], {relativeTo: this._route})
        }
      })
    })
  }

}
