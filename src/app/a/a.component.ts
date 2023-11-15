import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {
  inputData = '';

  constructor(private dataService: DataService) {}

  updateData() {
    this.dataService.updateData(this.inputData);
  }
}


