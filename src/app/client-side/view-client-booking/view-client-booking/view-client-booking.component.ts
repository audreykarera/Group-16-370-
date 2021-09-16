import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-client-booking',
  templateUrl: './view-client-booking.component.html',
  styleUrls: ['./view-client-booking.component.scss']
})
export class ViewClientBookingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialog.closeAll();
  }

}
