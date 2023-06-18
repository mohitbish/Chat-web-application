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
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {

  Groupname: String = "";
  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  //add new group to database
  addgroup(){
    console.log(this.Groupname)
    const Group = {Groupname: this.Groupname,Channellist: [], userlist:[] };
    this.httpClient.post(BACKEND_URL + '/addgroup', Group, httpOptions)
      .subscribe((data:any)=>{
        console.log(data);
        if(data.ok){
          alert("added");
          this.router.navigateByUrl("/superadmin");
        }
        
      })
  }

}
