import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/User';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice:UserService, private router:Router) { } //TODO put private userservice:UserService

  user:User;
  username:string;
  newpassword:string;
  confirmpassword:string;

  users:any;

  msg:string;

  redirectToCustomer(){
    this.router.navigate(['customer']);
  }

  redirectToEmployee(){
    this.router.navigate(['employee']);
  }

  async RegisterUser():Promise<User>{

    if(this.newpassword===this.confirmpassword){
      this.user = await this.userservice.createUser(this.username, this.newpassword);
      this.userservice.userInfo = this.user;
      this.redirectToCustomer();
      console.log(this.user);
    }
    else{
      this.msg="Sorry! Passwords have to match.";
    }
    return this.user;
  }

  
  ngOnInit(): void {
  }

}
