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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username = '';
  Password = '';

  constructor(private router:Router,  private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  check(){
    let user = {Username:this.Username, Password: this.Password};
 
    this.httpClient.post(BACKEND_URL + '/login', user, httpOptions)
      .subscribe((data:any)=>{
        if (data.ok){
          alert("correct");
          console.log(data.user);
          this.router.navigateByUrl("/profile");
        }
        else { alert("Username or Password incorrect");} 
      })
  }

}
