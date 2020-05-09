import { Component, OnInit, NgModule, Pipe, PipeTransform } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToppingService } from 'src/app/services/topping.service';
import { Topping } from 'src/app/models/Topping';
import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TicketService } from 'src/app/services/ticket.service';
import { PizzaService } from 'src/app/services/pizza.service';
import { UserRole } from 'src/app/models/UserRole';
import { UserService } from 'src/app/services/user.service';
import { Ticket } from 'src/app/models/Ticket';
import { User } from 'src/app/models/User';
import { Pizza } from 'src/app/models/Pizza';
import { TimestampPipe } from 'src/app/pipes/timestamp.pipe';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {


  screenHeight = window.innerHeight;
  // constructor() { }
  myForm: any;
  ngOnInit(): void {
  }

  closeResult: string;

  constructor(private modalService: NgbModal, private toppingService: ToppingService, 
    private formBuilder: FormBuilder, private ticketService: TicketService, private pizzaService: PizzaService, 
    private userService: UserService) { }
  // toppings:Array<Topping>;
  toppings: Array<Topping>;
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.getAllToppings();
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }




  async getAllToppings(): Promise<Array<Topping>> {
    this.toppings = await this.toppingService.getAllToppings();
    console.log(this.toppings);
    return this.toppings;
  }
  toppingFormGroup = this.formBuilder.group({
    toppings: this.formBuilder.array([])
  });
  interests: any;
  selected: any;

  pizzaprice: Array<{ id: number, name: string, price: number }> = [{ id: 0, name: "Cheese Pizza", price: 9.99 }];
  pizzaray: Array<string> = ["Cheese Pizza"];
  onChange(event) {
    const interests = <FormArray>this.toppingFormGroup.get('toppings') as FormArray;

    if (event.checked) {
      interests.push(new FormControl(event.source.value))
    } else {
      const i = interests.controls.findIndex(x => x.value === event.source.value);
      interests.removeAt(i);
    }
  }
  order: string;
  toppingSelected: Array<Topping>
  pizzas: Array<{ id: number, pizza: string, topping: Array<Topping> }> = [];
  table: boolean = false;
  counter: number = 0;
  addToCart() {
    this.table = true;
    this.modalService.dismissAll();
    this.toppingSelected = this.toppingFormGroup.value.toppings;
    this.pizzas.push({
      id: ++this.counter,
      pizza: this.pizzaray[0],
      topping: this.toppingSelected
    });
    console.log(this.pizzas[0].topping[0].toppingCost);
    this.toppingFormGroup = this.formBuilder.group({
      toppings: this.formBuilder.array([])
    });
    console.log(this.toppingSelected);
    this.total();
  }



  totalMoney: number;
  subtotal: number = 0;
  toppingCost: number;
  withTax = 0;
  total() {
    let ztoppingcost: number = 0;
    this.subtotal = this.pizzas.length * 9.99;
    for (let i = 0; i < this.pizzas.length; i++) {
      for (let k = 0; k < this.pizzas[i].topping.length; k++) {
        ztoppingcost += this.pizzas[i].topping[k].toppingCost;
      }
    }
    this.totalMoney = this.subtotal + ztoppingcost;
    this.withTax = ((ztoppingcost + this.subtotal) * .0875) + (ztoppingcost + this.subtotal)
   
    this.toppingCost = ztoppingcost;
  }

  
  removePizza(i: number) {
    
    this.pizzas.splice(i, 1);
    console.log(this.pizzas);
    if (this.pizzas.length > 0) {
      this.subtotal = this.subtotal - 9.99;
      this.total();
    }
    else {
      this.subtotal = 0;
      this.table = false;
    }
    
  }


  note: string = "";
  async placeOrder() {
    // let user: User = await this.userService.getUserByUserId(1); // Nirav's testing code
    let user:User = this.userService.userInfo;  // Access the current user information model object
    var d = new Date();
    let ticket: Ticket = new Ticket(0, user, d, "Submitted", this.note);
    let ticketPromise: Ticket = await this.ticketService.createTicket(ticket);
    
    for(let i=0;i<this.pizzas.length; i++){
      let createPizza: Pizza = new Pizza(0, ticketPromise, this.pizzas[i].topping);
      let pizzaPromise: Pizza = await this.pizzaService.createPizza(createPizza);
      console.log(pizzaPromise);
    }
    this.table=false;

  }
}
