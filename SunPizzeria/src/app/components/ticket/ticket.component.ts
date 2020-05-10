import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-tickets',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketsComponent implements OnInit {

  tickets:Array<Ticket>;
  user:User = new User();

  ticket: any;
  constructor(
    private ticketServ: TicketService,
    private userServ: UserService
    ) { 
      this.user = userServ.userInfo;
    }
  columns: string[][] = [];
  
  ngOnInit(): void {
    console.log("Trying to run ngOnInit in Ticket component!");
    this.getUserTickets();
  }
  async getUserTickets(): Promise<Array<Ticket>> {
    // cousole.log(this.user);
    this.tickets = await this.ticketServ.registredUserTickets(this.user.userId);
   
     return this.tickets;

  }
}

