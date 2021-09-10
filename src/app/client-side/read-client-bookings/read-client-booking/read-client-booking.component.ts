import { Service } from './../../../models/service';
import { BookingDetailsComponent } from './../../booking details/booking-details/booking-details.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ClientBookingsTable {
  id: number;
  name: string;
  service: string;
  date: string;
}

const ELEMENT_DATA: ClientBookingsTable[] = [
  {id: 1, name: 'Manesha Govender', service: 'Collection & Disposal of tires', date: '10/09/2021'},
  {id: 2, name: 'Nerisha Ramjee ', service: 'Collection & Disposal of tires', date: '10/09/2021'},
];

@Component({
  selector: 'app-read-client-booking',
  templateUrl: './read-client-booking.component.html',
  styleUrls: ['./read-client-booking.component.scss'],
})
export class ReadClientBookingComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'service', 'date', 'view'];
  dataSource = ELEMENT_DATA;
  
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
