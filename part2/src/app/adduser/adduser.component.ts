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
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
    Username : String = ""
    Password: String = ""
    Email : String = ""
    Role: String = ""

  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  adduser(){
    let user = {Username: this.Username, Email : this.Email, Role: this.Role, Password: this.Password}
    this.httpClient.post(BACKEND_URL + '/adduser', user, httpOptions)
      .subscribe((data:any)=>{
        console.log(data);
        alert("added");
      })
  }

}
