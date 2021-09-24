import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateTimeSlot } from 'src/app/Interfaces/Index';
import { DateTimeSlotService } from 'src/app/shared/services/date-time-slot.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-slot',
  templateUrl: './edit-slot.component.html',
  styleUrls: ['./edit-slot.component.scss']
})
export class EditSlotComponent implements OnInit {
  form: FormGroup;
  dateTimeSlot: DateTimeSlot;

  error_messages = {
    Date: [
      { type: 'required', message: 'Date is required' }
    ],
    StartTime: [
    { type: 'required', message: 'StartTime is required' }
    ], 
    EndTime: [
    { type: 'required', message: 'EndTime is required' }
    ], 
  }

  constructor(
    private service: DateTimeSlotService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditSlotComponent>, 
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.refreshForm();
    console.log(this.data.endTime + 'endtime'); 
    console.log(this.data.date + 'date')
    console.log(this.data.startTime + 'starttime')
  }

  Close(){
    this.dialog.closeAll();
  }

  createForm() {
    this.form = this.formBuilder.group({
      Date: [this.data.date , [Validators.required]], 
      StartTime: [this.data.startTime, [Validators.required]],
      EndTime: [this.data.endTime, [Validators.required]],
    })
  }

  OnSubmit() {
    console.log('Hello')
    if (this.form.valid) {
      const slot: DateTimeSlot = this.form.value;
      slot.DateTimeSlotId = this.data.dateTimSlotId;
      this.service.UpdateDateTimeSlot(slot).subscribe(res => {
        console.log(this.data + 'edit1'); 
        console.log(this.dateTimeSlot + 'edit1'); 
        this.refreshForm();
        this.dialogRef.close('add');
      }, (err: HttpErrorResponse) => {
        if(err.status != 200){
          this.notificationsService.failToaster('There was an error!', 'Error');
        }
      }
      );
    }
  }

  refreshForm() {
    this.dateTimeSlot = {
      DateTimeSlotId: 0,
      Date: null,
      StartTime: '',
      EndTime: ''
    }
  }

}
