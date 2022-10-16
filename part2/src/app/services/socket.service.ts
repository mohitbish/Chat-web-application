import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

import io from 'socket.io-client';

const BACKEND_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class SocketService {
  private socket;
  constructor() { }

  initSocket(){
    this.socket = io(BACKEND_URL);
    return ()=>{this.socket.disconnect();}
  }

  send(Message: string){
    this.socket.emit('message',Message)
  }

  getMessage(){
    return new Observable(observer =>{
      this.socket.on('message',(data: string)=>{
        observer.next(data)
      })
    })
  }

}
