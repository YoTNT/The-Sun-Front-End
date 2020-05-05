import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice:UserService) { } //TODO put private userservice:UserService

  user:User;
  username:string;
  password:string;

  users:any;

  ngOnInit(): void {
  }

  async login():Promise<User>{
    this.user = await this.userservice.loginUser(this.username, this.password);
    console.log(this.user);

    if(this.user.userRole.roleId == 6)
      console.log("Welcome back customer, " + this.user.userName);
    if(this.user.userRole.roleId == 1)
      console.log("Welcome back employee, " + this.user.userName);

    return this.user;
  }

  async getAllUsersInfo():Promise<any>{
    this.users = await this.userservice.getAllUsers();
    console.log(this.users);
  }
}
