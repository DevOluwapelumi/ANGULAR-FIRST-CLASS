import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { addTodoComponent } from './addtodo/addtodo.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DisplayApiComponent } from './display-api/display-api.component';
import { State1Component } from './state1/state1.component';
import { State2Component } from './state2/state2.component';
import { AssdetailsComponent } from './assdetails/assdetails.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EventparentComponent } from './eventparent/eventparent.component';
import { EventchildComponent } from './eventchild/eventchild.component';
import { EventsendComponent } from './eventsend/eventsend.component';
import { EventreceiveComponent } from './eventreceive/eventreceive.component';

const routes: Routes = [
  { path: 'Home', component:HomeComponent },
  { path: 'navbar', component:NavbarComponent },
  { path: 'addtocart', component:AddtocartComponent },
  { path: 'addtodo', component:addTodoComponent },
  { path: 'api', component:DisplayApiComponent },
  {path: 'contact', children: [
    {path:'', component:ContactComponent},
    {path:':id', component:ContactDetailsComponent},
  ]},
  { path: 'login', component:LoginComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'assdetails', component:AssdetailsComponent },
  { path: 'state1', component:State1Component },
  { path: 'state2', component:State2Component },
  { path: 'parent', component:ParentComponent },
  { path: 'eventparent', component:EventparentComponent },
  { path: 'eventsend', component:EventsendComponent },
  { path: 'child', component:ChildComponent },
  { path: 'eventchild', component:EventchildComponent },
  { path: 'eventreceive', component:EventreceiveComponent },

  {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
