import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { 
    if (!(sessionStorage.getItem('userlogin')=="true")){
      alert("login please");
      this.router.navigateByUrl("/login");
    }
    else{
      sessionStorage.clear();
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit(): void {
  }

}
