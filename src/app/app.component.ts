import { Component } from '@angular/core';
interface Student{
  firstname:string,
  lastname:string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstangularclass';
  public name:string = "Oluwapelumi";
  public age: number = 1000;
  public school: boolean = true;
  public myarray: number[] = [100];
  public myarray2: string[] = ["Hello"];
  public allschool: (string | number | boolean) = "SQI College of ICT";
  public myage: any = "twelve";
  public objArray:Student[]=[]
  // public obj: {
  //   firstname:string,
  //   lastname:string
  // } = {
  //   firstname:"Pemzzy",
  //   lastname:"Oluwa"
  // };
  public myobject:Student = {
    firstname:"Pemzzy",
    lastname:"Oluwa"
  }
  ngOnInit() {
    console.log(this.allschool);
    
  }
}
