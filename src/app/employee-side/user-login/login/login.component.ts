import { ResetPasswordComponent } from './../reset-password/reset-password/reset-password.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  routerResetPassword(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; //This must be set to true when the close button works
    const dialogReference = this.dialog.open(
      ResetPasswordComponent,
      dialogConfig
    );
  }

}
