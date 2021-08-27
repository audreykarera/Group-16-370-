import { CreateBookingComponent } from './../../../systems/bookings/create-booking/create-booking/create-booking.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-booking-slots',
  templateUrl: './booking-slots.component.html',
  styleUrls: ['./booking-slots.component.scss']
})
export class BookingSlotsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Skip', date: '2021-08-27' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      CreateBookingComponent,
      dialogConfig
    );
}
}

