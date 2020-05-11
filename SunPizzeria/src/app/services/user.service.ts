import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/User';
import { UserRole } from '../models/UserRole';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  userInfo:User;
  isCustomer:boolean;
  showLogin:boolean = true;
  showLogout:boolean = false;

  showHome:boolean = true;
  showOrder:boolean = true;
  showAbout:boolean = true;
  showGallery:boolean = true;
  showContact:boolean = true;

  async loginUser(username:string, password:string):Promise<any>{
    let user:User = new User();
    user.userId = 999;    //DUMMY
    user.userName = username;
    user.password = password;
    user.userRole = null;
    user.tickets = null;  //DUMMY

    let userPromise = this.http.post("http://localhost:9000/users/login", user).toPromise();
    return userPromise;
  }

  getAllUsers():Promise<any>{
    let usersPromise:Promise<any> = this.http.get(`http://localhost:9000/users`).toPromise();
    return usersPromise;
  }
  
   async createUser(username:string, password:string):Promise<any>{
    let userRole:UserRole = new UserRole(6, "Customer");

    let user:User = new User();
    user.userId = 0;    //DUMMY
    user.userName = username;
    user.password = password;
    user.userRole = userRole;
    user.tickets = null;  //DUMMY

    let userPromise = this.http.post("http://localhost:9000/users", user).toPromise();
    return userPromise;
  }

  getUserByUserId(userId:number):Promise<any>{
    let userById:Promise<any> = this.http.get(`http://localhost:9000/users/${userId}`).toPromise();
    return userById;
  }

}
