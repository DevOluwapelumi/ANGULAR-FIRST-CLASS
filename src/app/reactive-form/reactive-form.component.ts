import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor(public formbuilder: FormBuilder) { }
  public firstname = '';
  public lastname = '';
  public age = '';
  public email: string = '';
  public password = '';
  public registrationSuccessful: boolean = false;
  
  public forms = this.formbuilder.group({
    firstname:[''],
    lastname:[''],
    age:[''],
    email:[''],
    password:[''],
  })


  submitForm() {
    console.log(this.forms.value);
    this.forms.controls['firstname'].setValue('')
    this.forms.controls['lastname'].setValue('')
    this.forms.controls['age'].setValue('')
    this.forms.controls['email'].setValue('')
    this.forms.controls['password'].setValue('')    
  }
  submitForms(ngForm: NgForm) {
    console.log(this.firstname);
    // Check custom validation for email domain
    if (this.email && !this.isValidEmailDomain(this.email)) {
      ngForm.controls['email'].setErrors({ 'invalidDomain': true });
      return;
    }
    this.registrationSuccessful = true;

    // Reset the form after a successful registration
    ngForm.resetForm();
  
    console.log('Form submitted successfully');

     setTimeout(() => {
        this.registrationSuccessful = false;
      }, 3000); 
    }

  private isValidEmailDomain(email: string): boolean {
    const allowedDomains = ['gmail.com', 'outlook.com'];
    const domain = email.split('@')[1];
    return allowedDomains.includes(domain);
  }
}
