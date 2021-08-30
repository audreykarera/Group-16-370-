
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditUsersComponent } from '../../edit-user/edit-users/edit-users.component';
import { Observable } from 'rxjs';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';

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
  openDeleteDialog() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Confirmation Message',
      dialogContent: 'Are you sure you want to delete this?',
      cancelButtonLabel: 'No',
      confirmButtonLabel: 'Yes',
      callbackMethod: () => {
       
      },
    };
    this.dialog.open(SharedComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }


}
