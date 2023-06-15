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
  selector: 'app-groupassis',
  templateUrl: './groupassis.component.html',
  styleUrls: ['./groupassis.component.css'],
})
export class GroupassisComponent implements OnInit {
  Groups: Groupobj[] = [];
  AllGroups: Groupobj[] = [];
  User = { _id: '', Username: '', Password: '', Email: '', Role: '' };

  constructor(private router: Router, private httpClient: HttpClient) {
    this.User.Email = sessionStorage.getItem('Email');
    this.User.Password = sessionStorage.getItem('Password');
    this.User.Role = sessionStorage.getItem('Role');
    this.User.Username = sessionStorage.getItem('Username');
    this.User._id = sessionStorage.getItem('_id');
  }

  ngOnInit(): void {
    this.getGroups();
  }

  async getGroups() {
    let data = await this.httpClient
      .get<Groupobj[]>(BACKEND_URL + '/getgroups')
      .toPromise();
    this.AllGroups = data;
    console.log(this.AllGroups);

    let available_Groups = []
    this.AllGroups.forEach((g) => {
      console.log(typeof g.userlist);

       g.userlist.forEach(function (arrayItem) {
        var x = arrayItem;
        if (x.Username == sessionStorage.getItem('Username')) {
          console.log('yup');
          available_Groups.push(g)
        }
      });

      this.Groups = available_Groups;
    });
  }

  opengroup(Group: Groupobj) {
    localStorage.clear;
    localStorage.setItem('Group', JSON.stringify(Group));
    this.router.navigateByUrl('/groupview');
  }
}
