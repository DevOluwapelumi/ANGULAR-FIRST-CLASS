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

const routes: Routes = [
  { path: 'Home', component:HomeComponent },
  { path: 'addtocart', component:AddtocartComponent },
  { path: 'addtodo', component:addTodoComponent },
  { path: 'api', component:DisplayApiComponent },
  {path: 'contact', children: [
    {path:'', component:ContactComponent},
    {path:':id', component:ContactDetailsComponent},
  ]},
  { path: 'login', component:LoginComponent },
  { path: 'signup', component:SignupComponent },

  {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
