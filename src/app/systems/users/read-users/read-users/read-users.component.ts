
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditUsersComponent } from '../../edit-user/edit-users/edit-users.component';
import { Observable } from 'rxjs';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';

export interface PeriodicElement {
  usersname: string;
  username: string;
  email: string;
  role: string;
  loginstatus: string;
} 

const ELEMENT_DATA: PeriodicElement[] = [
  {usersname: 'Aubrey Sir', username: 'aubreysir24', email: 'aubreysir@gmail.com', role:'admin', loginstatus: 'online'},
];

@Component({
  selector: 'app-read-users',
  templateUrl: './read-users.component.html',
  styleUrls: ['./read-users.component.scss']
})
export class ReadUsersComponent implements OnInit {

  displayedColumns: string[] = ['usersname', 'username', 'email','role','loginstatus', 'edit'];
  dataSource = ELEMENT_DATA;

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
