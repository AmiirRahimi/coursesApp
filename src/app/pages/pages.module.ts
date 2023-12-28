import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseResolver } from '../core/resolvers/course.resolver';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    resolve: {
      courses: CourseResolver
     },
    children:[
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'course-detail',
        component: CourseDetailComponent
      }
    ]
  }
]

const CUSTOM = [
  HeaderComponent
]

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...CUSTOM
  ]
})
export class PagesModule { }
