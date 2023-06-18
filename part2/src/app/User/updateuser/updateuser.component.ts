import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userobj } from '../../userobj';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  Username : String =""
  Password: String =""
  Email : String =""
  Role: String = ""
  newuser = { Username : this.Username,Password: this.Password, Email : this.Email, Role: this.Role}
  user = { Username : this.Username,Password: this.Password, Email : this.Email, Role: this.Role}
  constructor(private router:Router,  private httpClient: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    console.log((this.user))
    this.Username = this.user.Username
    this.Password = this.user.Password
    this.Email = this.user.Email
    this.Role = this.user.Role
  }
  
  //updates user in database
  upadteuser(){
    let Nuser = { Username : this.Username,Password: this.Password, Email : this.Email, Role: this.Role};
    const prod = {new : Nuser, old: this.user};
    this.httpClient.post(BACKEND_URL + '/updateuser', prod , httpOptions)
      .subscribe((data:any)=>{
        console.log(data.user)
        if(data.ok){
          alert("updated");
          this.router.navigateByUrl("/users");
        }
      })
  }

}
