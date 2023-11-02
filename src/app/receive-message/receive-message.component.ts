import { Component, Input } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-receive-message',
  templateUrl: './receive-message.component.html',
  styleUrls: ['./receive-message.component.css']
})
export class ReceiveMessageComponent {
  @Input() message: Message = {} as Message;

  
}
