import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditUsersComponent } from '../../edit-user/edit-users/edit-users.component';

@Component({
  selector: 'app-read-users',
  templateUrl: './read-users.component.html',
  styleUrls: ['./read-users.component.scss']
})
export class ReadUsersComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  routerEditUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditUsersComponent, 
      dialogConfig
    );
  }

}
