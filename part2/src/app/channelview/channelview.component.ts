import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userobj } from '../userobj';
import { Groupobj } from '../groupobj';
import { Channelobj } from '../channel';
import { Chatobj } from '../chat';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods


@Component({
  selector: 'app-channelview',
  templateUrl: './channelview.component.html',
  styleUrls: ['./channelview.component.css']
})
export class ChannelviewComponent implements OnInit {

  Groupname = "";
  channelname = ""
  Message = "";
  Messages :string[]=[]
  ioConnection: any;
  User: Userobj= { Username : "", Password: "", Email : "", Role: ""}
  Chat: Chatobj = {Message:"", User:this.User }
  Channel: Channelobj = {Channelname:"", Userlist : [], chatList:[]}
  Channels: Channelobj[] =[]
  Gusers: Userobj[] = []
  chatlist : Chatobj[]=[]
  Group = {Groupname: this.Groupname, Channellist: [], userlist:[] };


  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log( JSON.parse(localStorage.getItem('Group')!))
    this.get1group(JSON.parse(localStorage.getItem('Group')!))
    this.Channel =JSON.parse(localStorage.getItem('channel')!)
    this.Channels = this.Group.Channellist
    this.channelname = this.Channel.Channelname

    

  }

  


  removefromchannel(guser: Userobj){
    const Gusers = this.Gusers.filter(data => data.Username != guser.Username);
    const NGroup = {Groupname: this.Groupname, Channellist: this.Group.Channellist, userlist: Gusers };
    const Group = {new : NGroup, old: this.Group};
    this.httpClient.post(BACKEND_URL + '/addchannel', Group , httpOptions)
      .subscribe((data:any)=>{
        if(data.ok){
          alert("removed");
          this.get1group(data.Group)
        }
      })
  }

  get1group(Group: Groupobj){
    this.httpClient.post(BACKEND_URL + '/get1group', Group, httpOptions)
      .subscribe((data:any)=>{
        console.log(data)
        this.Group = data[0]
        this.Gusers = data[0].userlist
        this.Channels = data[0].Channellist
        const channels: Channelobj[] = this.Channels.filter(data => data.Channelname == this.channelname);
        const channel = channels[0]
        this.chatlist = channel.chatList
      })
  }
  adduser(){
    localStorage.removeItem('Group')
    localStorage.setItem('Group', JSON.stringify(this.Group));
    this.router.navigateByUrl("/addusertochannel");
  }

  post(){

    
    const message = this.Message
    const user:Userobj = JSON.parse(localStorage.getItem('user')!)
    const Nuser: Userobj = user
    const Nchat: Chatobj = {Message: message , User: Nuser }
    console.log(Nchat)
    this.chatlist.push(Nchat)
    const channel: Channelobj = {Channelname : this.channelname, Userlist : [], chatList: this.chatlist }
    const channels = this.Channels.filter(data => data.Channelname != this.channelname);
    channels.push(channel)
    const NGroup = {Groupname: this.Groupname, Channellist: channels, userlist: this.Gusers };
    const Group = {new : NGroup, old: this.Group};
    this.httpClient.post(BACKEND_URL + '/addchannel', Group , httpOptions)
      .subscribe((data:any)=>{
        if(data.ok){
          this.get1group(data.Group)
        }
      })


  }

  removemessage(chat: Chatobj){
    const chatlist = this.chatlist.filter(data => data.Message != chat.Message);
    const channel: Channelobj = {Channelname : this.channelname, Userlist : [], chatList: chatlist }
    const channels = this.Channels.filter(data => data.Channelname != this.channelname);
    channels.push(channel)
    const NGroup = {Groupname: this.Groupname, Channellist: channels, userlist: this.Gusers };
    const Group = {new : NGroup, old: this.Group};
    this.httpClient.post(BACKEND_URL + '/addchannel', Group , httpOptions)
      .subscribe((data:any)=>{
        if(data.ok){
          this.get1group(data.Group)
        }
      })

  }




}
