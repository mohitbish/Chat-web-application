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

  Groupname= "";
  User= { Username : "", Password: "", Email : "", Role: ""}
  Chat = {Message:"", User:this.User }
  Channel = {Channelname:"", Userlist : [this.User], chatList:[this.Chat]}
  Channels =[this.Channel]
  Group = {Groupname: this.Groupname,Channellist: [this.Channel], userlist:[this.User] };

  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log( JSON.parse(localStorage.getItem('Group')!))
    console.log( JSON.parse(localStorage.getItem('channel')!))
    this.Group = JSON.parse(localStorage.getItem('Group')!)
    this.Groupname = this.Group.Groupname
    this.getgroup();
  }

  getgroup(){
    this.httpClient.post(BACKEND_URL + '/get1channel', this.Groupname, httpOptions)
      .subscribe((data:any)=>{
        console.log(data)
      })
  }

}
