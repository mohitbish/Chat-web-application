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
  selector: 'app-addusertochannel',
  templateUrl: './addusertochannel.component.html',
  styleUrls: ['./addusertochannel.component.css']
})
export class AddusertochannelComponent implements OnInit {

  users: Userobj[]= [];
  updateuserobj: Userobj[]= [];
  Groupname= "";
  User: Userobj= { Username : "", Password: "", Email : "", Role: ""}
  Chat: Chatobj = {Message:"", User:this.User }
  Channel = {Channelname:"", Userlist : [], chatList:[]}
  Gusers: Userobj[]= [];
  Group = {Groupname: this.Groupname, Channellist: [], userlist: [] };
  constructor(private router:Router,  private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.Group = JSON.parse(localStorage.getItem('Group')!);
    this.Gusers = this.Group.userlist
    this.Groupname = this.Group.Groupname
    this.getusers()
  }
  getusers(){
    this.httpClient.get<Userobj[]>(BACKEND_URL + '/getusers')
      .subscribe((data:any)=>{
        this.users = data;
        console.log(typeof(data));
      })
  }
  
  //updates userlist in channel and updates group
  addtochannle(user:Userobj ){
    this.Gusers.push(user)
    const userlist = this.Gusers
    const NGroup = {Groupname: this.Group.Groupname, Channellist: this.Group.Channellist, userlist: userlist };
    const Group = {new : NGroup, old: this.Group};
    this.httpClient.post(BACKEND_URL + '/addchannel', Group , httpOptions)
      .subscribe((data:any)=>{
        console.log(data.Group.Channellist)
        if(data.ok){
          alert("added");
          localStorage.removeItem('Group')
          localStorage.setItem('Group', JSON.stringify(data.Group));
          this.router.navigateByUrl("/channelview");
        }
      })
  }

}
