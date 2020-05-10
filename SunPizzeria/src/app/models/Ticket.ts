import { Time } from '@angular/common';
import {User} from"./User";
import { Pizza } from './Pizza';
export class Ticket
{
    ticketId:Number;
    user:User;
    placementTime:Date;
    status:string;
    note:string;
    pizzas: Set<Pizza> = new Set<Pizza>();

    constructor (ticketId:Number,  user:User, submitDate:Date , status:string, note:string){
        this.ticketId = ticketId;
        this.user = user;
        this.placementTime = submitDate;
        this.status = status;
        this.note = note;
    }
    
}