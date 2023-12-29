import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxFormBuilder, RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CourseFormModel } from './course-form.model';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../app.service';
import { SharedDataService } from '../../../core/services/shared-data.service';
import { CourseModel } from '../../../core/models/course.model';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RxReactiveFormsModule, CommonModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {

  @Input() course!: any
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
    this.checkForEdit()
  }

  checkForEdit(){
    if (this.course) {
      this.course['instructorName']= this.course.instructor.name
      this.course['instructorEmail']= this.course.instructor.email
      delete this.course.instructor
      this.formGroup.setValue(this.course)
    }
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
    if (this.course) {
      this.editCourse()
    }else{
      this.addCourse()
    }
    this.formGroup.reset()
    this._sharedDataService.setCourseFormModal(false)
  }

  addCourse(){
    let courses: any
    let lastId: number
    this._appService.getCourses().subscribe(res => {
      courses = res
      lastId = courses[courses.length - 1].id
      this.formGroup.controls['id'].setValue(lastId + 1)
    })
    this._appService.setCourses([...courses , this.formGroup.value])
  }

  editCourse(){
    
  }

  closeModal(){
    this._sharedDataService.setCourseFormModal(false)
    this.formGroup.reset()
  }

}
