import { HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from './../../../../shared/services/notifications.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingStatusService } from 'src/app/shared/services/booking-status.service';
import { BookingStatus } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-edit-booking-status',
  templateUrl: './edit-booking-status.component.html',
  styleUrls: ['./edit-booking-status.component.scss']
})
export class EditBookingStatusComponent implements OnInit {

  form: FormGroup;
  bookingstatus: BookingStatus

  error_messages = {
    BookingStatusName: [
      { type: 'required', message: 'Booking Status Name is required' },
      { type: 'minlength', message: 'Booking Status must be more than 1 character' },
      { type: 'maxlength', message: 'Booking Status Name must be less than 20 characters' }
    ]
  }

  constructor(private service: BookingStatusService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder, 
    private notificationService: NotificationsService,
    public dialogRef: MatDialogRef<EditBookingStatusComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    ) { }

    ngOnInit(): void {
      this.refreshForm();
      this.createForm();
      console.log('Hello')
    }

    createForm() {
      this.form = this.formBuilder.group({
        BookingStatusName: new FormControl(
          this.bookingstatus.BookingStatusName,
          Validators.compose([
            Validators.required,
            Validators.maxLength(19),
            Validators.minLength(2)
          ])
        )
      });
    }
  
    Close(){
      this.dialog.closeAll();
    }

    OnSubmit() {
      console.log('Hello')
      if (this.form.valid) {
      const bookingStatus: BookingStatus = this.form.value;
      bookingStatus.BookingStatusId = this.data.bookingStatusId;
      this.service.UpdateBookingStatus(bookingStatus).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      }, (err: HttpErrorResponse) => {
          if (err.status != 200){
            this.notificationService.failToaster('There was an error!', 'Error');
          }
      }
          );
      }
    }
  
     refreshForm(){
      this.bookingstatus = {
        BookingStatusId: 0,
        BookingStatusName: ''
    }

  }
}


