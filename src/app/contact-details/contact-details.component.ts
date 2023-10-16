import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  constructor(public actRoute: ActivatedRoute) {
    console.log(actRoute)
   }
  
  ngOnInit() {
    let contactArray = JSON.parse(localStorage['contactDetails'])
    console.log(this.actRoute);
    
  }

}
