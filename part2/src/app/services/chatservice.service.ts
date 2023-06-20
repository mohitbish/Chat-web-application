import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {io,Socket} from "socket.io-client";
import { Chatobj } from '../chat';
import { Userobj } from '../userobj';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  Socket:any;
  uri:string ="ws://localhost:3005"

  constructor() {
    
  }

  listen(eventname:string){
    return new Observable((subscribe)=>{
      this.Socket.on(eventname,(data)=>{
        subscribe.next(data);
      })
    });
  }
  emit(eventname:string,data:any){
    this.Socket.emit(eventname,data)
  }

};

  

