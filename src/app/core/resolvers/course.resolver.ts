import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from '@angular/router';
import { Observable, filter, map, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CourseModel } from '../models/course.model';
import { AppService } from '../../app.service';

export const CourseResolver: ResolveFn<CourseModel> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  appService = inject(AppService)
): Observable<CourseModel> => appService.fetchCourses()
  .pipe(
    filter<CourseModel>((courses: any) => !!courses),
    map((courses: any) => courses.courses),
    take(1)
  );
