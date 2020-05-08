import { Injectable } from '@angular/core';
import { Pizza } from '../models/Pizza';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http:HttpClient) { }


  async createPizza(pizza:Pizza):Promise<any>{
    let pizzaPromise = await this.http.post("http://localhost:9000/pizzas", pizza).toPromise();
    return pizzaPromise;
  }

}
