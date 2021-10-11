import { BookingStatus } from './../../../Interfaces/Index';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/Interfaces/Index';
import { BookingService } from 'src/app/shared/services/booking.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.scss']
})
export class ViewBookingsComponent implements OnInit {
  form: FormGroup;
  booking: Booking

  constructor(public dialog: MatDialog,
    private bookingService: BookingService, 
    private notificationsService: NotificationsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ViewBookingsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,) { }

    ngOnInit(): void {
      this.createForm();
      this.refreshForm();
    }

   refreshForm() {
    this.booking = {
      bookingId: 0,
      clientId: 0,
      bookingStatusId: 0,
      paymentTypeId: 0,
      collectionNoteId: 0,

      bookingService:[],
      serviceId:0
     
    }
    
  }

  Close() {
    this.dialog.closeAll();
  
  }
  
  createForm() {
    this.form = this.formBuilder.group({
      ClientFirstName: [this.data.clientFirstName],
      ClientSurname: [this.data.clientSurname],
      ClientEmailAddress: [this.data.clientEmailAddress],
      BookingStatus: [this.data.bookingStatusName],
      CollectionDate: [this.data.collectionDate],
      CollectionTime: [this.data.collectionTime],
      PaymentType: [this.data.paymentTypeName],
      BookingNumber: [this.data.bookingId],

    })
  }

}
