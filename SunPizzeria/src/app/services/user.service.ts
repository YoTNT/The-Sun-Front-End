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

  async loginUser(username:string, password:string):Promise<any>{
    let userRole:UserRole = new UserRole(1, "Employee")
    let user:User = new User(999, username, password, userRole );
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

  getUserByUserId(userId:number):Promise<any>{
    let userById:Promise<any> = this.http.get(`http://localhost:9000/users/${userId}`).toPromise();
    return userById;
  }

  getUserByUserName(userName:string):Promise<any>{
    let userByUserName:Promise<any> = this.http.get(`http://localhost:9000/users/${userName}`).toPromise();
    return userByUserName;
  }

}