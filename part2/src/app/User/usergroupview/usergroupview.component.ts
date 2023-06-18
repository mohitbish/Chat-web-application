import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Channelobj } from 'src/app/channel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods

@Component({
  selector: 'app-usergroupview',
  templateUrl: './usergroupview.component.html',
  styleUrls: ['./usergroupview.component.css'],
})
export class UsergroupviewComponent implements OnInit {
  Groupname = '';
  User = { Username: '', Password: '', Email: '', Role: '' };
  Chat = { Message: '', User: this.User };
  Channels: Channelobj[] = [];
  Group = { Groupname: this.Groupname, Channellist: [], userlist: [] };
  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.Group = JSON.parse(localStorage.getItem('Group')!);
    this.Groupname = this.Group.Groupname;
    console.log(this.Group);
    this.getChannels();
  }

  //gets channellist from group
  async getChannels() {
    let data = await this.httpClient
      .post(BACKEND_URL + '/getchannels', this.Group, httpOptions)
      .toPromise();
    this.Group = data[0];
    this.Channels = this.Group.Channellist;
    console.log(this.Group);
  }

  //redirects to channel
  openchannel(Channel: Channelobj) {
    localStorage.clear;
    localStorage.setItem('channel', JSON.stringify(Channel));
    this.router.navigateByUrl('/channelview');
  }
}
