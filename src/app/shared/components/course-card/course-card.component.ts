import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { SharedDataService } from '../../../core/services/shared-data.service';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [MatIconModule,RouterModule,],
  providers:[SharedDataService],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {

  constructor(
    private _sharedDataService: SharedDataService,
    private _router: Router,
    // private _route: ActivatedRoute
    ){}

  @Input() course: any

  courseDetail(){
    this._sharedDataService.setCourse(this.course)
    this._router.navigate(['./course-detail'])
  }

}
