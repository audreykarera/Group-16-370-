import { EditBookingStatusComponent } from './../../edit-booking-status/edit-booking-status/edit-booking-status.component';
import { CreateBookingStatusComponent } from './../../create-booking-status/create-booking-status/create-booking-status.component';
import { BookingStatusService } from './../../../../shared/services/booking-status.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BookingStatus } from 'src/app/models/bookingstatus';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

export interface BookingStatusTable{
  id: number;
  name: string;
}

const ELEMENT_DATA: BookingStatusTable[] = [
  {id: 1, name: 'Booked'},
  {id: 2, name: 'Pending'}
];

@Component({
  selector: 'app-read-booking-status',
  templateUrl: './read-booking-status.component.html',
  styleUrls: ['./read-booking-status.component.scss']
})
export class ReadBookingStatusComponent implements OnInit {


  displayedColumns: string[] = ['id','name','edit','delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  bookingStatusList: BookingStatus[];
  bookingStatus:BookingStatus;
  searchText='';

  constructor(public dialog: MatDialog,
    private bookingStatusService: BookingStatusService,
    private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.readBookingStatuses();
  }

  readBookingStatuses(){
    this.bookingStatusService.getBookingStatuses().subscribe((res)=>{
      this.bookingStatusList=res as BookingStatus[];
    }, (err:HttpErrorResponse)=>{
      this.notificationService.failToaster("Unable to display Payment Types", "Error");
      console.log(err);
    })
  }

  onDelete(id){
    this.bookingStatusService.deleteBookingStatus(id).subscribe((res)=>{
      console.log(id);
      this.readBookingStatuses();
    }, (err: HttpErrorResponse)=>{
      this.notificationService.failToaster("Booking Status has been deleted", "Error");
    });
  }

  // openAddDialog(){
  //   this.dialog.open(CreateBookingStatusComponent,{height:'auto',width:'auto'});
  // }

  // openEditDialog(){
  //   this.dialog.open(EditBookingStatusComponent,{height:'auto',width:'auto'});
  // }

   routerAddBookingStatus() {
    const dialog = new MatDialogConfig
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'}
    const dialogReference = this.dialog.open(
      CreateBookingStatusComponent,
      dialog
    )
   }
   routerEditBookingStatus() {
    const dialog = new MatDialogConfig
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'}
    const dialogReference = this.dialog.open(
      EditBookingStatusComponent,
      dialog
    )
   }


}

