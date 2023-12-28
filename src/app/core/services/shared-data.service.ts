import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private _headerTitle: string = ''
  private _courseFormModal: boolean = false

  constructor() { }

  getHeaderTitle(){
    return this._headerTitle
  }

  setHeaderTitle(title: string){
    this._headerTitle = title
  }
  
  getCourseFormModal(){
    return this._courseFormModal
  }

  setCourseFormModal(state: boolean){
    this._courseFormModal = state
  }
}
