import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: 'courses',
        component: CoursesComponent
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
