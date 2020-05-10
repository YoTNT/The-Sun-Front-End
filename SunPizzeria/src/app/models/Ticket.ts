import { Time } from '@angular/common';
import { Pizza } from './Pizza';
import { User } from './User';

export class Ticket {
  ticketId: number;
  placementTime: Date;
  note: string;
  status: string;
  user:User;
  //  user:User;
  pizzas: Set<Pizza> = new Set<Pizza>();

  constructor (ticketId:number,  user:User, submitDate:Date , status:string, note:string){
      this.ticketId = ticketId;
      this.user = user;
      this.placementTime = submitDate;
      this.status = status;
      this.note = note;
  }

}