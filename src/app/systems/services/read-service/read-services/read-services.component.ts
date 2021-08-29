import { EditServiceComponent } from './../../edit-service/edit-service/edit-service.component';
import { CreateServiceComponent } from './../../create-service/create-service/create-service.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';

@Component({
  selector: 'app-read-services',
  templateUrl: './read-services.component.html',
  styleUrls: ['./read-services.component.scss']
})
export class ReadServicesComponent implements OnInit {

  constructor(
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  routerAddSerice() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateServiceComponent,
      dialogConfig
    );
  }

  routerEditService() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditServiceComponent,
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
