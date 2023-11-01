import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() sendPost = ''
  public comment = ''
  @Output() commentEmitter= new EventEmitter

  sendComment() {
    this.commentEmitter.emit(this.comment)
  }
}