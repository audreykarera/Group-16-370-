import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookingStatus } from 'src/app/Interfaces/Index';
import { BookingStatusService } from 'src/app/shared/services/booking-status.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-create-booking-status',
  templateUrl: './create-booking-status.component.html',
  styleUrls: ['./create-booking-status.component.scss']
})
export class CreateBookingStatusComponent implements OnInit {
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
    public dialogRef: MatDialogRef<CreateBookingStatusComponent>) { }

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
        this.bookingstatus = this.form.value;
        this.service.CreateBookingStatus(this.bookingstatus).subscribe(res => {
          this.refreshForm();
          this.dialogRef.close('add');
        });
      }
    }
  
     refreshForm(){
      this.bookingstatus = {
        BookingStatusId: 0,
        BookingStatusName: ''
    }

  }
}

