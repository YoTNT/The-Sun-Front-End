import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
// import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLoginNav:boolean;
  showLogoutNav:boolean;

  constructor(private userservice:UserService) { 
    this.showLoginNav = userservice.showLogin;
    this.showLogoutNav = userservice.showLogout;
  }

  ngOnInit(): void {
    // const source = interval(2000);
    // const subscribe = source.subscribe(val => console.log(val));
  }

}
