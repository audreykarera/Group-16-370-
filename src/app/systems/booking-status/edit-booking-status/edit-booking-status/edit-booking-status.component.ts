import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-booking-status',
  templateUrl: './edit-booking-status.component.html',
  styleUrls: ['./edit-booking-status.component.scss']
})
export class EditBookingStatusComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialog.closeAll();
  }



}
