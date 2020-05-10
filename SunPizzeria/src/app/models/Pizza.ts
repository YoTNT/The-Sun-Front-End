import { Ticket } from './Ticket';
import { Topping } from './Topping';

export class Pizza{
    pizzaId:number;
    ticket:Ticket;
    toppings:Array<Topping>;

    constructor(pizzaId:number,ticket:Ticket,  toppings:Array<Topping>){
        this.pizzaId = pizzaId;
        this.ticket = ticket;
        this.toppings = toppings;
    }
}