import { Component } from '@angular/core';

@Component({
  selector: 'app-eventsend',
  templateUrl: './eventsend.component.html',
  styleUrls: ['./eventsend.component.css']
})
export class EventsendComponent {
  public sending = ''
  public acceptSending=''
  

  send() {
    console.log(this.sending);
  }
  receiveChat(message:string) {
    this.acceptSending=message
  }
}
