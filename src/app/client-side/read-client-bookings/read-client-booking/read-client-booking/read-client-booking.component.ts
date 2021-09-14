import { ViewClientBookingComponent } from './../../../view-client-booking/view-client-booking/view-client-booking.component';
import { CreateBookingComponent } from './../../../../systems/bookings/create-booking/create-booking/create-booking.component';
import { BookingDetailsComponent } from 'src/app/client-side/booking details/booking-details/booking-details.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';


export interface ClientBookingsTable {
  id: number;
  name: string;
  service: string;
  servicetype: string;
  date: string;
  time: string;
}

const ELEMENT_DATA: ClientBookingsTable[] = [
  {id: 1, name: 'Manesha Govender', service: 'Collection & Disposal',servicetype:'tires', date: '10/09/2021',time:'10:00-12:00'},
  {id: 2, name: 'Nerisha Ramjee ', service: 'Collection & Disposal',servicetype:'tires' ,date: '10/09/2021', time:'10:00-12:00'},
];

@Component({
  selector: 'app-read-client-booking',
  templateUrl: './read-client-booking.component.html',
  styleUrls: ['./read-client-booking.component.scss']
})
export class ReadClientBookingComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'service','servicetype', 'date','time','view', 'cancel'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // routerRequestBooking(){
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = false;
  //   const dialogReference = this.dialog.open(
  //     CreateBookingComponent,
  //     dialogConfig
  //   );
  // }

  openAddDialog(){
    this.dialog.open(CreateBookingComponent,{height:'auto',width:'400px'});
  }

  openViewDialog(){
    this.dialog.open(ViewClientBookingComponent,{height:'auto',width:'400px'});
  }

  // routerViewBooking(){
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = false;
  //   const dialogReference = this.dialog.open(
  //     ViewClientBookingComponent,
  //     dialogConfig
  //   );
  // }
}
