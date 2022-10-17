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
  Channel = {Channelname:"", Userlist : [], chatList:[]}
  Channels: Channelobj[] = []
  userlist: Userobj[] = []
  Group = {Groupname: this.Groupname, Channellist: [], userlist:[] };
  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.Group = JSON.parse(localStorage.getItem('Group')!)
    this.Groupname = this.Group.Groupname
    this.Channels = this.Group.Channellist
  }

  //adds channel to the group
  addChannel(){
    const Channel = {Channelname: this.Channelname, Userlist : [], chatList: []}
    this.Channels.push(Channel)
    
    const Channels = this.Channels
    const NGroup = {Groupname: this.Groupname, Channellist: Channels, userlist:this.Group.userlist };
    const Group = {new : NGroup, old: this.Group};
    this.httpClient.post(BACKEND_URL + '/addchannel', Group , httpOptions)
      .subscribe((data:any)=>{
        console.log(data.Group.Channellist)
        if(data.ok){
          alert("Adeed");
          localStorage.removeItem('Group')
          localStorage.setItem('Group', JSON.stringify(data.Group));
          this.router.navigateByUrl("/groupview");
        }
      })
  }
}
