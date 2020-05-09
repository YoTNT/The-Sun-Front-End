import { Injectable } from '@angular/core';


import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ToppingService {

  constructor(private http:HttpClient) { }

  

  async getAllToppings():Promise<any>{
    let toppingPromise:Promise<any> =  this.http.get('http://localhost:9000/toppings').toPromise();
    return toppingPromise;
  }

}
