import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  user:User;

  constructor(private userservice:UserService) {
    this.user = userservice.userInfo;
  }

  ngOnInit(): void {
  }

}
