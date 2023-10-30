import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assdetails',
  templateUrl: './assdetails.component.html',
  styleUrls: ['./assdetails.component.css']
})
export class AssdetailsComponent {
  userDataArray: any[] = []; 
  @Input() userData: any;
  showDetails: boolean = false;
  selectedUserData: any = null;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  ngOnInit() {
    // Retrieve the array of user data from local storage
    this.userDataArray = JSON.parse(localStorage.getItem('userDataArray') || '[]');
  }
  displayUserDetails(user: any) {
    // Store the selected user data
    this.selectedUserData = user;
  }

}
