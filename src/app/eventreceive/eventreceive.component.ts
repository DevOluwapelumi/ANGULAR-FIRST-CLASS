import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-eventreceive',
  templateUrl: './eventreceive.component.html',
  styleUrls: ['./eventreceive.component.css']
})
export class EventreceiveComponent {
  @Input() chatSending = ''
  public chat = ''
  @Output() commentEmitter= new EventEmitter

  sendChat() {
    this.commentEmitter.emit(this.chat)
  }
}
