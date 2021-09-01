import { EditBookingStatusComponent } from './../../edit-booking-status/edit-booking-status/edit-booking-status.component';
import { CreateBookingStatusComponent } from './../../create-booking-status/create-booking-status/create-booking-status.component';
import { BookingStatusService } from './../../../../shared/services/booking-status.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BookingStatus } from 'src/app/models/bookingstatus';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-read-booking-status',
  templateUrl: './read-booking-status.component.html',
  styleUrls: ['./read-booking-status.component.scss']
})
export class ReadBookingStatusComponent implements OnInit {

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

  routerAddBookingStatus() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateBookingStatusComponent, 
      dialogConfig
    );
  }
  routerEditBookingStatus(bookingStatusId:number, bookingStatusName:string) {
    console.log(bookingStatusId, bookingStatusName);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditBookingStatusComponent, 
      {
        disableClose:true,
        data:{
          bookingStatusId,
          bookingStatusName
        }
      }
    );

}
}

