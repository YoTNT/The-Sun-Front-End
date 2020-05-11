import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { Pizza } from 'src/app/models/Pizza';
import { Topping } from 'src/app/models/Topping';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  public user: User = new User();
  @Input() public SelectedView: any = 1;

  public SelectedStatus: any = "All";
  @ViewChild("ddlViewLayout") public ddlViewLayout: ElementRef;
  public tickets: Array<Ticket>;
  public ticket: Ticket;
  @Input() public filterList: Array<Ticket>;
  LayoutList: any = [{ id: 1, name: "Table View" }, { id: 2, name: "Card View" }];
  Statuslist: any = [
    { id: "All", status: 'All' }, { id: "Submitted", status: 'Submitted' },
    { id: 'InProgress', status: 'InProgress' },
    { id: 'Ready', status: 'Ready' },
    { id: 'OutForDelivery', status: 'Out For Delivery' },
    { id: 'Delivered', status: 'Delivered' }
  ];
  constructor(private ticketServ: TicketService, private userServ: UserService) {

    this.user = userServ.userInfo;
    this.getUserTickets();
    

  }

  ngOnInit(): void {
 
this.getUserTicketsbyStatus();
  }
  async getUserTickets(): Promise<Array<Ticket>> {

    if (this.userServ.isCustomer) {
      this.tickets = await this.ticketServ.registredUserTickets(this.user.userId);
    }
    else if (!this.userServ.isCustomer) {
      this.tickets = await this.ticketServ.getAllTickets();
    }

    // this.tickets = await this.ticketServ.registredUserTickets(this.user.userId);
    return this.tickets;

  }
  async getUserTicketsbyStatus(): Promise<Array<Ticket>> {
    console.log(this.SelectedStatus);

    if (this.tickets != null && this.tickets.length > 0) {
      this.filterList = this.tickets.filter((t => {
        if (this.SelectedStatus == "All")
          return this.tickets;
        else return t.status == this.SelectedStatus;
      })
      );

    }
    else {
      this.tickets = await this.getUserTickets();
      this.filterList = this.tickets.filter((t => {
        if (this.SelectedStatus == "All")
          return this.tickets;
        else
          return t.status == this.SelectedStatus;
      })
      );

    }
    console.log(this.filterList);
    return this.filterList;
  }
  changeview() {

  }

}
