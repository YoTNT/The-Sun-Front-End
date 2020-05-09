import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userservice:UserService, 
    private router:Router,
    ) { };

  user:User;
  username:string;
  password:string;

  @Output() close: EventEmitter<any> = new EventEmitter(); 

  users:any;

  ngOnInit(): void {
  }

  redirectToCustomer(){
    this.router.navigate(['customer']);
  }

  redirectToEmployee(){
    this.router.navigate(['employee']);
  }

  loginModeForNav(){
    this.userservice.showLogin = false;
    this.userservice.showLogout = true;
  }

  async login():Promise<User>{
    this.user = await this.userservice.loginUser(this.username, this.password);
    console.log(this.user);

    if(this.user.userRole.roleId == 6){
      console.log("Welcome back customer, " + this.user.userName);
      this.userservice.userInfo = this.user;
      this.redirectToCustomer();

      this.close.emit(null);
    }
    if(this.user.userRole.roleId == 1){
      console.log("Welcome back employee, " + this.user.userName);
      this.userservice.userInfo = this.user;
      this.redirectToEmployee();
    }

    return this.user;
  }

  async getAllUsersInfo():Promise<any>{
    this.users = await this.userservice.getAllUsers();
    console.log(this.users);
  }
}