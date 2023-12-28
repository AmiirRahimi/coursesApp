import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent implements OnInit  {

  constructor(
    private _appService: AppService,
    private _route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses(){
    const courses = this._route.snapshot.data['courses']
    this._appService.setCourses(courses)
  }

}
