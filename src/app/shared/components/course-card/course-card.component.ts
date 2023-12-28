import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
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
    ){}

  @Input() course: any

}
