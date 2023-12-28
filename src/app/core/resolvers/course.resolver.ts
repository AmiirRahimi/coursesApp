import { Injectable, inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from '@angular/router';
import { Observable, filter, map, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CourseModel } from '../models/course.model';
import { AppService } from '../../app.service';

export const CourseResolver: ResolveFn<CourseModel> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  appService = inject(AppService)
): Observable<CourseModel> => appService.fetchCourses()
  // .pipe(
  //   filter<CourseModel>((course: CourseModel) => !!course),
  //   map((course: CourseModel) => new CourseModel(course)),
  //   take(1)
  // );
