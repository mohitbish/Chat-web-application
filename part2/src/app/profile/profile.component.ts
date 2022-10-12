import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
// const BACKEND_URL = 'http://localhost:3000';
const BACKEND_URL = 'https://localhost:3000';

// for angular http methods
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

import { Userobj } from '../userobj';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(private router: Router, private httpClient: HttpClient) { 
    console.log(sessionStorage.getItem('Role'))
    if (!(sessionStorage.getItem('Loginstatus')=="true")){
      alert("login please");
      this.router.navigateByUrl("/login");
    }

    if ((sessionStorage.getItem('Loginstatus')=="true") && (sessionStorage.getItem('Role')=="superadmin") ){
      this.router.navigateByUrl("/superadmin");
    }
    if ((sessionStorage.getItem('Loginstatus')=="true") && (sessionStorage.getItem('Role')=="groupadmin") ){
      this.router.navigateByUrl("/groupadmin");
    }
    if ((sessionStorage.getItem('Loginstatus')=="true") && (sessionStorage.getItem('Role')=="groupassis") ){
      this.router.navigateByUrl("/groupassis");
    }
    if ((sessionStorage.getItem('Loginstatus')=="true") && (sessionStorage.getItem('Role')=="user") ){
      this.router.navigateByUrl("/userview");
    }
  }

  ngOnInit(): void {
   
  }


}
