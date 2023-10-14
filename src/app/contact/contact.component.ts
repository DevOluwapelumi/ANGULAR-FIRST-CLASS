import { Component } from '@angular/core';

interface ContactInterface {
  Firstname: string;
  Lastname: string;
  Email: string;
  Phoneno: string;
  Address: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  inputStyle = 'form-control my-2';
  public firstname = '';
  public lastname = '';
  public email = '';
  public phonenumber = '';
  public address = '';
  public contactArray: ContactInterface[] = [];

  addContact() {
    console.log(this.lastname);
    let contactObject: ContactInterface = {
      Firstname: this.firstname,
      Lastname: this.lastname,
      Email: this.email,
      Phoneno: this.phonenumber,
      Address: this.address,
    };

    this.contactArray.push(contactObject);
    console.log(this.contactArray);
    
    // Clear the input fields after adding a contact
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.phonenumber = '';
    this.address = '';
  }


}
