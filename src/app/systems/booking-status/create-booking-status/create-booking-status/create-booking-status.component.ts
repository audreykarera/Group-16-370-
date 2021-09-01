import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookingStatus } from 'src/app/models/bookingstatus';
import { BookingStatusService } from 'src/app/shared/services/booking-status.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-create-booking-status',
  templateUrl: './create-booking-status.component.html',
  styleUrls: ['./create-booking-status.component.scss']
})
export class CreateBookingStatusComponent implements OnInit {

  bookingStatus: BookingStatus;
  bookingStatusList: BookingStatus[];

  constructor(private bookingStatusService: BookingStatusService,
    public dialog:MatDialog,
    private notificationService:NotificationsService,
    public router:Router) { }

    ngOnInit(): void {
      this.refreshForm();
    }
  
    Close(){
      this.dialog.closeAll();
    }
  
    onSave(){
      this.bookingStatusService.postBookingStatus(this.bookingStatus).subscribe((res)=>{
        this.bookingStatus = res as BookingStatus; 
      });
      this.Close();
      this.notificationService.successToaster("Successfully saved Booking Status", "Success Message");
      setTimeout(()=>{
        window.location.reload();
      }, 1000);
    }
  
    //This method rfreshes the form verytime something is done. That is why it is called in the OnInit
    refreshForm(){
      this.bookingStatus = {
        BookingStatusId: 0,
        BookingStatusName: ''
    }

  }
}
