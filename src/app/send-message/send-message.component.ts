import { Component, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {
  @Output() messageSent = new EventEmitter<Message>();
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const message: Message = {
        text: this.newMessage,
        sender: 'You',
        timestamp: new Date(),
      };
      this.messageSent.emit(message);
      this.newMessage = '';
    }
  }
}
