import { BookingStatusService } from './../../../../shared/services/booking-status.service';
import { BookingStatus } from './../../../../models/bookingstatus';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-edit-booking-status',
  templateUrl: './edit-booking-status.component.html',
  styleUrls: ['./edit-booking-status.component.scss']
})
export class EditBookingStatusComponent implements OnInit {

  bookingStatus: BookingStatus;
  constructor(private bookingStatusService: BookingStatusService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
    private notificationService: NotificationsService) { }

    ngOnInit(): void {
      console.log(this.data);
      this.refreshForm();
    }
  
    Close(){
      this.dialog.closeAll();
    }

    onSave(){
      this.bookingStatusService.patchBookingStatus(this.bookingStatus).subscribe((res)=>{
        this.bookingStatus = res as BookingStatus; 
      });
      this.Close();
      this.notificationService.successToaster("Successfully saved Payment Type", "Success Message");
      setTimeout(()=>{
        window.location.reload();
      }, 1000);
    }
  
    refreshForm(){
      this.bookingStatus = {
        BookingStatusId: 0,
        BookingStatusName: ''
      }
  }
}

