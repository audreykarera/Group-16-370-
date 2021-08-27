import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/angular';
import { BookingDetailsComponent } from 'src/app/client-side/booking details/booking-details/booking-details.component';

@Component({
  selector: 'app-schedule-employee',
  templateUrl: './schedule-employee.component.html',
  styleUrls: ['./schedule-employee.component.scss']
})
export class ScheduleEmployeeComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2019-04-01' },
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