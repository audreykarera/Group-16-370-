import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTimeSlot } from 'src/app/Interfaces/Index';
import { DateTimeSlotService } from 'src/app/shared/services/date-time-slot.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';


@Component({
  selector: 'app-create-slot',
  templateUrl: './create-slot.component.html',
  styleUrls: ['./create-slot.component.scss']
})
export class CreateSlotComponent implements OnInit {
  form: FormGroup;
  dateTimeSlot: DateTimeSlot;

  error_messages = {
    Date: [
      { type: 'required', message: 'Date is required' }
    ],
    StartTime: [
    { type: 'required', message: 'Start Time is required' }
    ], 
    EndTime: [
    { type: 'required', message: 'End Time is required' }
    ], 
  }


  constructor(
    private service: DateTimeSlotService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateSlotComponent>
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
    console.log(this.form.value)
  }

  Close(){
    this.dialog.closeAll();
  }

  createForm() {
    this.form = this.formBuilder.group({
      Date: new FormControl(
        this.dateTimeSlot.Date,
        Validators.required
      ),
      StartTime: new FormControl(
        this.dateTimeSlot.StartTime, 
        Validators.required
      ), 
      EndTime: new FormControl(
        this.dateTimeSlot.EndTime,
        Validators.required
      )
    })
  }

  refreshForm() {
    this.dateTimeSlot = {
      DateTimeSlotId: 0,
      Date: null,
      StartTime: '',
      EndTime: ''
    }
  }

  OnSubmit() {
    console.log('Hello')
    if (this.form.valid) {
      this.dateTimeSlot = this.form.value;
      console.log(this.dateTimeSlot + "Form Value")
      this.service.CreateDateTimeSlot(this.dateTimeSlot).subscribe(res => {
        console.log(this.dateTimeSlot.Date, this.dateTimeSlot.StartTime, this.dateTimeSlot.EndTime + " datetimeslotobject")
        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
  }

}
