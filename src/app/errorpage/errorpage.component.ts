import { Component } from '@angular/core';
import { CreatecontactService } from '../services/createcontact.service';


interface ContactInterface {
  Firstname: string;
  Lastname: string;
  Email: string;
  Phoneno: string;
  Address: string;
}
@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent {
  public showArray: number[] = [];
  public createContact:ContactInterface[]=[]
  constructor(public contactService: CreatecontactService) { }
  ngOnInit() {
    this.contactService.getcreateContactArray()
    console.log(this.createContact)
    this.showArray=this.contactService.getcontactArray()
    
  }
}
