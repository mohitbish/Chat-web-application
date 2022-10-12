import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userobj } from '../userobj';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Userobj[]= [];
  constructor(private router:Router,  private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getusers()
  }
  getusers(){
    this.httpClient.get<Userobj[]>(BACKEND_URL + '/getusers')
      .subscribe((data:any)=>{
        this.users = data;
        console.log(typeof(data));
      })
  }
  
  removeuser(user:Userobj){
    this.httpClient.post(BACKEND_URL + '/removeuser', user)
      .subscribe((data:any)=>{
        this.users = data;
      })
  }
  /*
  updateproduct(user:){
    this.httpClient.post(BACKEND_URL + '/productfind1', Prod)
      .subscribe((data:any)=>{
        this.uprods = data[0];
        console.log(this.uprods)
        localStorage.removeItem('prod')
        localStorage.setItem('prod', JSON.stringify(this.uprods));
        this.router.navigateByUrl("/updateproduct");
      })
  }*/

}
