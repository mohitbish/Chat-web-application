import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const BACKEND_URL = 'https://group-chat-api.onrender.com';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, private httpClient: HttpClient) {
    console.log(sessionStorage.getItem('Role'));
    //checks for login status
    if (!(sessionStorage.getItem('Loginstatus') == 'true')) {
      alert('login please');
      this.router.navigateByUrl('/login');
    }
    //redirect to views according to Role
    if (
      sessionStorage.getItem('Loginstatus') == 'true' &&
      sessionStorage.getItem('Role') == 'superadmin'
    ) {
      this.router.navigateByUrl('/superadmin');
    }
    if (
      sessionStorage.getItem('Loginstatus') == 'true' &&
      sessionStorage.getItem('Role') == 'user'
    ) {
      this.router.navigateByUrl('/groupassis');
    }
  }

  ngOnInit(): void {
    
  }
}
