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
  User= { Username : "", Password: "", Email : "", Role: ""}
  Chat = {Message:"", User:this.User }
  Channel = {Channelname:"", Userlist : [this.User], chatList:[this.Chat]}
  Channels =[this.Channel]
  Group = {Groupname: this.Groupname,Channellist: [this.Channel], userlist:[this.User] };
  constructor(private router:Router,  private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.Group = JSON.parse(localStorage.getItem('Group')!);
    this.getusers()
  }
  getusers(){
    this.httpClient.get<Userobj[]>(BACKEND_URL + '/getusers')
      .subscribe((data:any)=>{
        this.users = data;
        console.log(typeof(data));
      })
  }
  
  addtochannle(user:Userobj ){
    const Nuser  = { Username : user.Username, Password: user.Password, Email : user.Email, Role: user.Role}
    const Userlist = this.Group.userlist.push(Nuser)
    const NGroup = {Groupname: this.Group.Groupname, Channellist: this.Group.Channellist, userlist: Userlist };
    const Group = {new : NGroup, old: this.Group};
    this.httpClient.post(BACKEND_URL + '/addchannel', Group , httpOptions)
      .subscribe((data:any)=>{
        console.log(data.Group.Channellist)
        if(data.ok){
          alert("added");
          this.router.navigateByUrl("/channelview");
        }
      })
  }

}
