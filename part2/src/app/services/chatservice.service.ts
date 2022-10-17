import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { Chatobj } from '../chat';
import { Userobj } from '../userobj';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: Socket;
  url = 'http://localhost:3000';
 
  constructor() {
    this.socket= io("ws://localhost:3000")
  }

  initsocket(){
    this.socket= io("ws://localhost:3000")
    return ()=>{this.socket.disconnect();}
  }

  send(Message: string): void {
    this.socket.emit('message', Message);
  }

  getMessage(): Observable<any> {
    return new Observable(observer=>{
      this.socket.on('message', (data)=>{observer.next(data)})
    })
  }

  

}