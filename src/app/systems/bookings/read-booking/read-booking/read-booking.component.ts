import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/angular';
import { BookingDetailsComponent } from 'src/app/client-side/booking details/booking-details/booking-details.component';

@Component({
  selector: 'app-read-booking',
  templateUrl: './read-booking.component.html',
  styleUrls: ['./read-booking.component.scss']
})
export class ReadBookingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Skip booking', date: '2021-08-05' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      BookingDetailsComponent,
      dialogConfig
    );
}
}
