import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent {
  constructor(public snack: MatSnackBar) { }
  public name = "DevOluwaPelumi"
  hidden = false

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  
  ngOnInit() {
    this.getsnack()
  }

  getsnack() {
    this.snack.open(`Welcome, ${this.name}`, 'Cancel', {
      duration:5000
    })
  }
}






