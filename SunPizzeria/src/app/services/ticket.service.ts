import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Ticket } from '../models/Ticket';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  async createTicket(ticket:Ticket):Promise<any>{
    let ticketPromise =  await this.http.post("http://localhost:9000/tickets", ticket).toPromise();
    return ticketPromise;
  }
}
