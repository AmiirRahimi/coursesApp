import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from '../../core/models/course.model';
import { SharedDataService } from '../../core/services/shared-data.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit {

  public course!: CourseModel

  constructor(
    private _route: ActivatedRoute,
    private _sharedDataService: SharedDataService
    ){}

  ngOnInit(): void {
    this.getParams()
  }

  getParams(){
    this._sharedDataService.getCourse().subscribe((res:any) => {
      this.course = res
    })
  }

}
