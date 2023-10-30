import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userData: any = {};
  userDataArray: any[] = []; 
  selectedUserData: any = null;


  ngOnInit() {
    // Retrieve user data from local storage when the component initializes
    this.userDataArray = JSON.parse(localStorage.getItem('userDataArray') || '[]');
  }

  onSubmit() {
    // Add the new user data to the array
    this.userDataArray.push(this.userData);

    // Save the updated array to local storage
    localStorage.setItem('userDataArray', JSON.stringify(this.userDataArray));

    // Clear the form input fields
    this.userData = {};
  }
 
}
