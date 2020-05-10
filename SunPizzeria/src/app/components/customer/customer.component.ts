import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/User';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  user:User;

  constructor(private userservice:UserService, private dialog: MatDialog) {
    this.user = userservice.userInfo;
  }

  openDialog():void{
    const dialogRef = this.dialog.open(LoginComponent, {
      maxWidth:'400px',
      maxHeight:'600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });

  }

  closeDialog():void{
    const dialogRef = this.dialog.closeAll();
  }

  ngOnInit(): void {
  }

}
