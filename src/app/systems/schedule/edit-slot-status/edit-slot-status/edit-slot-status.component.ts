import { SlotStatusService } from './../../../../shared/services/slot-status.service';
import { SlotStatus } from 'src/app/Interfaces/Index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-slot-status',
  templateUrl: './edit-slot-status.component.html',
  styleUrls: ['./edit-slot-status.component.scss']
})
export class EditSlotStatusComponent implements OnInit {

  form: FormGroup;
  slotStatus: SlotStatus;

  error_messages = {
    SlotStatusName: [
      { type: 'required', message: 'Slot Status Name is required' },
      { type: 'minlength', message: 'Slot Status must be more than 2 characters' },
      { type: 'maxlength', message: 'Slot Status must be less than 11 characters' }
    ]
  }

  constructor(
    public dialog: MatDialog,
    private service: SlotStatusService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditSlotStatusComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private notificationService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
  }

  Close(){
    this.dialog.closeAll();
  }

  createForm() {
    this.form = this.formBuilder.group({
      PaymentTypeName: [this.data.paymentTypeName,
        [Validators.required, Validators.maxLength(10), Validators.minLength(2)]]
    });
  }

  OnSubmit(){
    if(this.form.valid) {
      const slotStatus: SlotStatus = this.form.value;
      slotStatus.SlotStatusId = this.data.slotStatusId;
      this.service.UpdateSlotStatus(slotStatus).subscribe(res=> {
        this.refreshForm();
        this.dialogRef.close('add');
      }, (err: HttpErrorResponse) => {
        if(err.status !=200){
          this.notificationService.failToaster('There was an error!', 'Error');
        }
      }
      );
    }
  }

  refreshForm(){
    this.slotStatus = {
      SlotStatusId: 0,
      SlotStatusName: ''
    }
  }

}
