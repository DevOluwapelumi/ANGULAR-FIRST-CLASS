import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public post = ''
  public acceptComment=''
  

  send() {
    console.log(this.post);
  }
  receiveComment(message:string) {
    this.acceptComment=message
  }

}
