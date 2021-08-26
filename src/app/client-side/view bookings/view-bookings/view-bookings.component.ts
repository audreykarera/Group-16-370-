import { BookingDetailsComponent } from './../../booking details/booking-details/booking-details.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.scss']
})
export class ViewBookingsComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  routerBookingDetails(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      BookingDetailsComponent,
      dialogConfig
    );

}
}