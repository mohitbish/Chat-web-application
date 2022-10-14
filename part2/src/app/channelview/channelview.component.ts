import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userobj } from '../userobj';
import { Groupobj } from '../groupobj';
import { Channelobj } from '../channel';
import { Chatobj } from '../chat';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods


@Component({
  selector: 'app-channelview',
  templateUrl: './channelview.component.html',
  styleUrls: ['./channelview.component.css']
})
export class ChannelviewComponent implements OnInit {

  
  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

}
