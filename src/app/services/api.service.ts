import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public api: HttpClient) { }
  getApiArray() {
    return this.api.get('https://jsonplaceholder.typicode.com/users')
  }
}
