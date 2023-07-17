import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userobj } from '../../userobj';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'https://group-chat-api.onrender.com';
// for angular http methods


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: Userobj[]= [];
  updateuserobj: Userobj[]= [];
  constructor(private router:Router,  private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getusers()
  }

  // gets userslist from database
  getusers(){
    this.httpClient.get<Userobj[]>(BACKEND_URL + '/getusers')
      .subscribe((data:any)=>{
        this.users = data;
        console.log(typeof(data));
      })
  }
  
  // removes users from database
  removeuser(user:Userobj){
    this.httpClient.post(BACKEND_URL + '/removeuser', user)
      .subscribe((data:any)=>{
        this.users = data;
      })
      this.getusers();
  }
  
  // update user in database
  updateuser(user:Userobj){
    this.httpClient.post(BACKEND_URL + '/getupdateuser', user)
      .subscribe((data:any)=>{
        this.updateuserobj = data[0];
        console.log(this.updateuserobj)
        localStorage.removeItem('user')
        localStorage.setItem('user', JSON.stringify(this.updateuserobj));
        this.router.navigateByUrl("/updateuser");
      })
  }

}
