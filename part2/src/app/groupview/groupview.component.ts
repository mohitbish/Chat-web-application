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
  selector: 'app-groupview',
  templateUrl: './groupview.component.html',
  styleUrls: ['./groupview.component.css']
})
export class GroupviewComponent implements OnInit {
  Groupname= "";
  User= { Username : "", Password: "", Email : "", Role: ""}
  Chat = {Message:"", User:this.User }
  Channel = {Channelname:"", Userlist : [], chatList:[]}
  Channels =[this.Channel]
  Group = {Groupname: this.Groupname,Channellist: [], userlist:[] };
  constructor(private router:Router, private httpClient: HttpClient) {
   }

  ngOnInit(): void {
    this.Group = JSON.parse(localStorage.getItem('Group')!);
    this.Groupname = this.Group.Groupname
    console.log((this.Group))
    console.log(this.Channels)
    this.getChannels()
  }

  //updates group to add channel
  addChannel(){
    localStorage.removeItem('Group')
    localStorage.setItem('Group', JSON.stringify(this.Group));
    this.router.navigateByUrl("/addchannel");
  }

  //gets channellist from group
  getChannels(){
    const Group = this.Group
    this.httpClient.post(BACKEND_URL + '/getchannels', Group, httpOptions)
      .subscribe((data:any)=>{
        this.Channels = data[0].Channellist;
        this.Channels.filter(data => data.Channelname != " ");
        console.log(data[0])
      })
  }

  //updates group to remove 
  removechannel(channel: Channelobj){
    const Channels = this.Channels.filter(data => data.Channelname != channel.Channelname);
    const NGroup = {Groupname: this.Groupname, Channellist: Channels, userlist: this.Group.userlist };
    const Group = {new : NGroup, old: this.Group};
    this.httpClient.post(BACKEND_URL + '/addchannel', Group , httpOptions)
      .subscribe((data:any)=>{
        console.log(data.Group.Channellist)
        if(data.ok){
          alert("removed");
          this.getChannels();
        }
      })
  }
  openchannel(Channel: Channelobj){
    localStorage.clear
    localStorage.setItem('channel', JSON.stringify(Channel));
    this.router.navigateByUrl("/channelview");
  }
}
