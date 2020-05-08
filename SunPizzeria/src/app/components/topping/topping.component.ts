import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.css']
})
export class ToppingComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  async getAllToppings():Promise<any>{
    let toppingPromise:Promise<any> =  this.http.get('http://localhost:9000/toppings').toPromise();
    return toppingPromise;
  }

}
