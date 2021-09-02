import { EditSlotComponent } from './../../edit-slot/edit-slot.component';
import { CreateSlotComponent } from './../../create-slot/create-slot/create-slot.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-read-schedule',
  templateUrl: './read-schedule.component.html',
  styleUrls: ['./read-schedule.component.scss']
})
export class ReadScheduleComponent implements OnInit {

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

  handleDateClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateSlotComponent,
      dialogConfig
    );
    
  }
  routerEditBookingSlot() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditSlotComponent,
      dialogConfig
    );
  }
}
