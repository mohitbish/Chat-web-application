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
  selector: 'app-addchannel',
  templateUrl: './addchannel.component.html',
  styleUrls: ['./addchannel.component.css']
})
export class AddchannelComponent implements OnInit {
  Groupname = " ";
  Channelname = " ";
  User= { Username : "", Password: "", Email : "", Role: ""}
  Chat = {Message:"", User:this.User }
  Channel = {Channelname:"", Userlist : [this.User], chatList:[this.Chat]}
  Channels =[this.Channel]
  userlist = [this.User]
  Group = {Groupname: this.Groupname, Channellist: [this.Channel], userlist:[this.User] };
  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.Group = JSON.parse(localStorage.getItem('Group')!)
    this.userlist = this.Group.userlist
    this.Groupname = this.Group.Groupname
    this.Channels = this.Group.Channellist
  }

  addChannel(){
    const Channel = {Channelname: this.Channelname, Userlist : [this.User], chatList:[this.Chat]}
    this.Channels.push(Channel)
    
    const Channels = this.Channels
    console.log(Channels)
    const NGroup = {Groupname: this.Groupname, Channellist: Channels, userlist:this.userlist };
    const Group = {new : NGroup, old: this.Group};
    this.httpClient.post(BACKEND_URL + '/addchannel', Group , httpOptions)
      .subscribe((data:any)=>{
        console.log(data.Group.Channellist)
        if(data.ok){
          alert("updated");
          this.router.navigateByUrl("/groupview");
        }
      })
  }
}
