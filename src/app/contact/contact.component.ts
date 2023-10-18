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

  ngOnInit() {
    if(localStorage['contactDetails']){
      this.contactArray=JSON.parse(localStorage.getItem('contactDetails')!)
      console.log(this.contactArray);
      
    } else {
      this.contactArray=[]
    }
  }

  addContact() {
    console.log(this.firstname);
    let contactObject: ContactInterface = {
      Firstname: this.firstname,
      Lastname: this.lastname,
      Email: this.email,
      Phoneno: this.phonenumber,
      Address: this.address,
    };

    this.contactArray.push(contactObject);
    console.log(this.contactArray);
    localStorage.setItem('contactDetails', JSON.stringify(this.contactArray))
    
    // Clear the input fields after adding a contact
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.phonenumber = '';
    this.address = '';
  }

  deleteContact(index: number) {
    console.log(index);
    this.contactArray.splice(index, 1)
    localStorage.setItem('contactDetails', JSON.stringify(this.contactArray));
  }


}
