import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/User';
import { HttpHeaders } from '@angular/common/http';   // From Angular website

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

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

}
