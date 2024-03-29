import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userobj } from '../userobj';
import { Groupobj } from '../groupobj';
import { Channelobj } from '../channel';
import { Chatobj } from '../chat';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const BACKEND_URL = 'https://group-chat-api.onrender.com';
// for angular http methods

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
})
export class SuperadminComponent implements OnInit {
  Groups: Groupobj[] = [];
  Username: string ;
  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getGroups();
    this.Username = sessionStorage.getItem('Username')
  }

  getGroups() {
    this.httpClient
      .get<Groupobj[]>(BACKEND_URL + '/getgroups')
      .subscribe((data: any) => {
        this.Groups = data;
        
        console.log(typeof data, data);
      });
  }

  opengroup(Group: Groupobj) {
    localStorage.clear;
    localStorage.setItem('Group', JSON.stringify(Group));
    this.router.navigateByUrl('/groupview');
  }

  async removegroup(Group: Groupobj) {
    let data = await this.httpClient
      .post(BACKEND_URL + '/removegroup', Group, httpOptions)
      .toPromise();

    alert('deleted');
    this.getGroups();
  }
}
