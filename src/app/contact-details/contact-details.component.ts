import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface ContactInterface {
  Firstname: string;
  Lastname: string;
  Email: string;
  Phoneno: string;
  Address: string;
}

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  constructor(public actRoute: ActivatedRoute) {
    console.log(actRoute)
  }
      contactIndex:number=1
  contactObject: ContactInterface = {
    Firstname: '',
    Lastname: '',
    Email: '',
    Phoneno: '',
    Address: '',
      }
  
  ngOnInit() {
    let contactArray = JSON.parse(localStorage['contactDetails'])
    console.log(this.contactIndex);
    
    // console.log(contactArray);
    // console.log(this.actRoute.snapshot.params['id']);

    this.contactIndex = this.actRoute.snapshot.params['id']
    console.log(this.contactIndex);
    
    contactArray[this.contactIndex]
    this.contactObject = contactArray[this.contactIndex]
    console.log(this.contactObject);
    
    // this.contactObject = contactArray.find((contact: ContactInterface, index: number) => this.contactIndex == index)
    // console.log(this.contactObject);
    
    
  }

}
