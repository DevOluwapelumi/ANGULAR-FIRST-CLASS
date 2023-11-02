// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { Message } from '../message.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class MessageService {
//   constructor() { }
//   private messages: Message[] = [];
//   private messageSubject = new BehaviorSubject<Message[]>(this.messages);

//   sendMessage(message: Message) {
//     this.messages.push(message);
//     this.messageSubject.next(this.messages);
//   }

//   getMessages(): Observable<Message[]> {
//     return this.messageSubject.asObservable();
//   }
// }

