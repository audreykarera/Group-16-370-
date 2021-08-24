import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-read-schedule',
  templateUrl: './read-schedule.component.html',
  styleUrls: ['./read-schedule.component.scss']
})
export class ReadScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr)
  }
}
