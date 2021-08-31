import { EditBookingStatusComponent } from './../../edit-booking-status/edit-booking-status/edit-booking-status.component';
import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking/create-booking.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-booking-status',
  templateUrl: './read-booking-status.component.html',
  styleUrls: ['./read-booking-status.component.scss']
})
export class ReadBookingStatusComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  routerAddBookingStatus() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateBookingComponent,
      dialogConfig
    );
  }

  routerEditBookingStatus() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditBookingStatusComponent,
      dialogConfig
    );
  }


}
