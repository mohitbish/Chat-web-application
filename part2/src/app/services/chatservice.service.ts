import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { Chatobj } from '../chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: Socket;
  private url = 'http://localhost:3000'; // your server local path

  constructor() {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }


  sendMessage(data: Chatobj): void {
    this.socket.emit('message', data);
  }

  getMessage(): Observable<any> {
    return new Observable<{user: string, message: string}>(observer => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    });
  }

  getStorage() {
    const storage: Chatobj = JSON.parse(localStorage.getItem('chats')!);
    return storage 
  }

  setStorage(data: Chatobj) {
    localStorage.setItem('chats', JSON.stringify(data));
  }

}