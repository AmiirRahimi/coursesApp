import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private _headerItems: {title: string | null, button: string | null} = {title: null, button: null}
  private _courseFormModal: boolean = false

  constructor() { }

  getHeaderItems(){
    return this._headerItems
  }

  setHeaderItems(items: any){
    this._headerItems = items
  }
  
  getCourseFormModal(){
    return this._courseFormModal
  }

  setCourseFormModal(state: boolean){
    this._courseFormModal = state
  }
}
