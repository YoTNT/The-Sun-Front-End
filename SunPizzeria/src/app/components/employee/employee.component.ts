import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  user:User;

  constructor(private userservice:UserService) {
    this.user = userservice.userInfo;
  }

  ngOnInit(): void {
  }

}
