import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userobj } from 'src/app/userobj';
import { Groupobj } from 'src/app/groupobj';
import { Channelobj } from 'src/app/channel';
import { Chatobj } from 'src/app/chat';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods

@Component({
  selector: 'app-userchannelview',
  templateUrl: './userchannelview.component.html',
  styleUrls: ['./userchannelview.component.css'],
})
export class UserchannelviewComponent implements OnInit {
  Groupname = '';
  channelname = '';
  Message = '';
  Messages: string[] = [];
  ioConnection: any;
  User: Userobj = { Username: '', Password: '', Email: '', Role: '' };
  Chat: Chatobj = { Message: '', User: this.User };
  Channel: Channelobj = { Channelname: '', Userlist: [], chatList: [] };
  Channels: Channelobj[] = [];
  Gusers: Userobj[] = [];
  chatlist: Chatobj[] = [];
  Group = { Groupname: this.Groupname, Channellist: [], userlist: [] };

  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.get1group(JSON.parse(localStorage.getItem('Group')!));
    this.Channel = JSON.parse(localStorage.getItem('channel')!);
    this.User = JSON.parse(localStorage.getItem('user')!);
    this.Channels = this.Group.Channellist;
    this.channelname = this.Channel.Channelname;
    this.chatlist = this.Channel.chatList;
    this.Group = JSON.parse(localStorage.getItem('Group')!);
    this.Groupname = this.Group.Groupname;
    console.log(this.Groupname);
    console.log(JSON.parse(localStorage.getItem('Group')!));
    console.log(JSON.parse(localStorage.getItem('channel')!));
  }

  //gets groups
  get1group(Group: Groupobj) {
    this.httpClient
      .post(BACKEND_URL + '/get1group', Group, httpOptions)
      .subscribe((data: any) => {
        console.log(data);
        this.Group = data[0];
        this.Gusers = data[0].userlist;
        this.Channels = data[0].Channellist;
        const channels: Channelobj[] = this.Channels.filter(
          (data) => data.Channelname == this.channelname
        );
        const channel = channels[0];
        this.chatlist = channel.chatList;
      });
  }

  //posts message and updates group
  post() {
    const message = this.Message;
    const user: Userobj = JSON.parse(localStorage.getItem('user')!);
    const Nuser: Userobj = user;
    const Nchat: Chatobj = { Message: message, User: Nuser };
    console.log(Nchat);
    this.chatlist.push(Nchat);

    const channel: Channelobj = {
      Channelname: this.channelname,
      Userlist: [],
      chatList: this.chatlist,
    };
    const channels = this.Channels.filter(
      (data) => data.Channelname != this.channelname
    );
    channels.push(channel);
    const NGroup = {
      Groupname: this.Groupname,
      Channellist: channels,
      userlist: this.Gusers,
    };
    const Group = { new: NGroup, old: this.Group };
    this.httpClient
      .post(BACKEND_URL + '/addchannel', Group, httpOptions)
      .subscribe((data: any) => {
        if (data.ok) {
          this.get1group(data.Group);
        }
      });

    this.Message = '';
  }

  //upadte group to remove message
  removemessage(chat: Chatobj) {
    if (chat.User.Username == this.User.Username) {
      const chatlist = this.chatlist.filter(
        (data) => data.Message != chat.Message
      );
      const channel: Channelobj = {
        Channelname: this.channelname,
        Userlist: [],
        chatList: chatlist,
      };
      const channels = this.Channels.filter(
        (data) => data.Channelname != this.channelname
      );
      channels.push(channel);
      const NGroup = {
        Groupname: this.Groupname,
        Channellist: channels,
        userlist: this.Gusers,
      };
      const Group = { new: NGroup, old: this.Group };
      this.httpClient
        .post(BACKEND_URL + '/addchannel', Group, httpOptions)
        .subscribe((data: any) => {
          if (data.ok) {
            this.get1group(data.Group);
          }
        });
    }
    else{
      alert("only the sender or admin can delete other messages")
    }
  }
}
