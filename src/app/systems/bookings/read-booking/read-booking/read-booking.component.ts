import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-read-booking',
  templateUrl: './read-booking.component.html',
  styleUrls: ['./read-booking.component.scss']
})
export class ReadBookingComponent implements OnInit {

  constructor() { }

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

  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr)
  }
}
