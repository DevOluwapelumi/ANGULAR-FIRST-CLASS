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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { addTodoComponent } from './addtodo/addtodo.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DisplayApiComponent } from './display-api/display-api.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeComponent } from './pipe/pipe.component';
import { State1Component } from './state1/state1.component';
import { State2Component } from './state2/state2.component';
import { AssdetailsComponent } from './assdetails/assdetails.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ReceiveMessageComponent } from './receive-message/receive-message.component';
import { EventparentComponent } from './eventparent/eventparent.component';
import { EventchildComponent } from './eventchild/eventchild.component';
import { EventsendComponent } from './eventsend/eventsend.component';
import { EventreceiveComponent } from './eventreceive/eventreceive.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { AngmaterialComponent } from './angmaterial/angmaterial.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
// import { RegisterComponent } from './register/register.component';

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
    PipeComponent,
    State1Component,
    State2Component,
    AssdetailsComponent,
    ParentComponent,
    ChildComponent,
    SendMessageComponent,
    ReceiveMessageComponent,
    EventparentComponent,
    EventchildComponent,
    EventsendComponent,
    EventreceiveComponent,
    ReactiveFormComponent,
    AComponent,
    BComponent,
    CComponent,
    AngmaterialComponent,
    SnackBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatTableModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

