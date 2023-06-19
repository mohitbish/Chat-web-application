import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userobj } from '../userobj';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Username = '';
  Password = '';

  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {}

  //sets session storage for  user
  check() {
    if (this.Username != '' && this.Password != '') {
      let user = { Username: this.Username, Password: this.Password };
      //returns the user if found,
      this.httpClient
        .post(BACKEND_URL + '/login', user, httpOptions)
        .subscribe((data: any) => {
          if (data.ok) {
            alert('correct');
            console.log(data.user);
            //checks login credentials in database,
            sessionStorage.setItem('Username', data.user.Username);
            sessionStorage.setItem('Email', data.user.Email);
            sessionStorage.setItem('Password', data.user.Password);
            sessionStorage.setItem('Loginstatus', data.ok);
            sessionStorage.setItem('Role', data.user.Role);
            sessionStorage.setItem('_id', data.user._id);
            localStorage.setItem('user', JSON.stringify(data.user));
            this.router.navigateByUrl('/');
          } else {
            alert('Username or Password incorrect');
          }
        });
    } else {
      alert('Please input correct value');
    }
  }
}
