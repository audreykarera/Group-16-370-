import { BookingDetailsComponent } from './../../booking details/booking-details/booking-details.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-read-client-booking',
  templateUrl: './read-client-booking.component.html',
  styleUrls: ['./read-client-booking.component.scss']
})
export class ReadClientBookingComponent implements OnInit {
  
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
