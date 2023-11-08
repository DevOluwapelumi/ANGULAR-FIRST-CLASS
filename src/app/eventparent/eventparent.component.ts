import { Component } from '@angular/core';

@Component({
  selector: 'app-eventparent',
  templateUrl: './eventparent.component.html',
  styleUrls: ['./eventparent.component.css']
})
export class EventparentComponent {
  public MsgToChild=''
  public msgToChild2 = ''
  public receiveResponse=''

  sendMsg() {
    this.msgToChild2=this.MsgToChild
    console.log(this.msgToChild2);
    
  }

  receiveEmitMsg(response:string){
    this.receiveResponse=response
  }

}
