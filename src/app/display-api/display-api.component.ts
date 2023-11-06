import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-display-api',
  templateUrl: './display-api.component.html',
  styleUrls: ['./display-api.component.css']
})
export class DisplayApiComponent {
  constructor(public apiservice: ApiService) { }
  apiArray: any = []
  
  ngOnInit() {
    this.apiservice.getApiArray().subscribe(response => {
      this.apiArray=response
    console.log(this.apiArray);
    }, (error) => {
      console.log(error);
      
  });
  
  }

}
