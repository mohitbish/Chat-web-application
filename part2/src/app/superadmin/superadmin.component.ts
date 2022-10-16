import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {

  constructor(private router:Router,  private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

}
