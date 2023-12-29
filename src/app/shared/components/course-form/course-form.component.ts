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
  courses!: CourseModel[]
  formGroup!: FormGroup
  courseFormModel: CourseFormModel = new CourseFormModel()
  tags: any = []

  constructor(
    private _rxFormBuilder: RxFormBuilder,
    private _appService: AppService,
    private _sharedDataService: SharedDataService
  ){}

  ngOnInit(): void {
    this.getCourses()
    this.initForm()
    this.checkForEdit()
  }

  checkForEdit(){
    if (this.course) {
      if (this.course.instructor) {
        this.course['instructorName']= this.course.instructor.name
        this.course['instructorEmail']= this.course.instructor.email
        delete this.course.instructor
      }
      this.tags = this.course.tags
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
    let lastId: number
    lastId = this.courses[this.courses.length - 1].id as number
    this.formGroup.controls['id'].setValue(lastId + 1)
    let formValue = this.formGroup.value
    formValue.instructor = {
      name:         formValue.instructorName,
      email:        formValue.instructorEmail,
     },
     delete formValue.instructorName
     delete formValue.instructorEmail
    this._appService.setCourses([...this.courses , this.formGroup.value])
  }

  editCourse(){
    this.courses = this.courses.map((course:any) => {
      if (course.id == this.formGroup.value.id) {
        const keys = Object.keys(course)
        keys.forEach(key => {
          course[key] = this.formGroup.value[key]
        })
        course.instructor = {
          name:         this.formGroup.value.instructorName,
          email:        this.formGroup.value.instructorEmail,
         }
      }
      return course
    })
  }

  closeModal(){
    this._sharedDataService.setCourseFormModal(false)
    this.formGroup.reset()
  }

  getCourses(){
    this._appService.getCourses().subscribe(res => {
      this.courses = res
    })
  }

}
