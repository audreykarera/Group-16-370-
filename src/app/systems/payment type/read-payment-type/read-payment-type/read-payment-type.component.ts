import { EditPaymentTypeComponent } from './../../edit-payment-type/edit-payment-type/edit-payment-type.component';
import { CreatePaymentTypeComponent } from './../../create-payment-type/create-payment-type/create-payment-type.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-read-payment-type',
  templateUrl: './read-payment-type.component.html',
  styleUrls: ['./read-payment-type.component.scss']
})
export class ReadPaymentTypeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  routerAddPaymentType() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreatePaymentTypeComponent, 
      dialogConfig
    );
  }
  routerEditPaymentType() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditPaymentTypeComponent, 
      dialogConfig
    );

}
}