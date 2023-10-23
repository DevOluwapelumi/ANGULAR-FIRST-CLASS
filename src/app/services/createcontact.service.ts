import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatecontactService {

  public contactArray: number[] = [ 1, 22, 23, 34, 45, 56]
  constructor() { }

  getcontactArray() {
    return this.contactArray
  }
  getcreateContactArray() {
    return JSON.parse(localStorage['contactDetails'])
  }

}
