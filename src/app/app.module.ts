import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { FormsModule } from '@angular/forms';
import { addTodoComponent } from './addtodo/addtodo.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DisplayApiComponent } from './display-api/display-api.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    AddtocartComponent,
    addTodoComponent,
    ContactDetailsComponent,
    ErrorpageComponent,
    DisplayApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

