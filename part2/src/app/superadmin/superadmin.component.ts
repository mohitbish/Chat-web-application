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
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css'],
})
export class SuperadminComponent implements OnInit {

  Groups: Groupobj[] = [];
  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    
    this.getGroups();
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

  removegroup(Group: Groupobj) {
    this.httpClient
      .post(BACKEND_URL + '/removegroup', Group)
      .subscribe((data: any) => {
        alert('deleted');
        console.log(data)
        this.Groups = data;
        this.getGroups();
      });
  }
}
