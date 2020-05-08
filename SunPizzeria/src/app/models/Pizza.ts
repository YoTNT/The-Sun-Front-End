import { Ticket } from './Ticket';
import { Topping } from './Topping';

export class Pizza{
    pizzaId:number;
    ticket:Ticket;
    toppings: Set<Topping> = new Set<Topping>();

    constructor(pizzaId:number,ticket:Ticket ){
        this.pizzaId = pizzaId;
        this.ticket = ticket;
    }
}