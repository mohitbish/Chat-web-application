import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { 

    //checks for loginstatus
    if (!(sessionStorage.getItem('Loginstatus')=="true")){
      alert("login please");
      this.router.navigateByUrl("/login");
    }
    
    //clears storage
    else{
      sessionStorage.clear();
      localStorage.clear();
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit(): void {
  }

}
