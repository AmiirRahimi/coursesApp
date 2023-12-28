import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxFormBuilder, RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CourseFormModel } from './course-form.model';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../app.service';
import { SharedDataService } from '../../../core/services/shared-data.service';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RxReactiveFormsModule, CommonModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {

  formGroup!: FormGroup
  courseFormModel: CourseFormModel = new CourseFormModel()
  tags: any = []

  constructor(
    private _rxFormBuilder: RxFormBuilder,
    private _appService: AppService,
    private _sharedDataService: SharedDataService
  ){}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.formGroup = this._rxFormBuilder.formGroup(this.courseFormModel)
  }

  addTag(){
    this.tags.push({
      name: null,
      description: null
    })
  }

  changeTag(){
    this.formGroup.controls['tags'].setValue(this.tags)
  }

  submit(){
    let courses: any
    this._appService.getCourses().subscribe(res => {
      courses = res
    })
    this._appService.setCourses([...courses , this.formGroup.value])
    this.formGroup.reset()
    this._sharedDataService.setCourseFormModal(false)
  }

  closeModal(){
    this._sharedDataService.setCourseFormModal(false)
    this.formGroup.reset()
  }

}
