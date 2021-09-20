import { HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from './../../../../shared/services/notifications.service';
import { SlotStatusService } from './../../../../shared/services/slot-status.service';
import { SlotStatus } from './../../../../Interfaces/Index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';


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
      {type: 'required', message: 'Slot Status Name is required'},
      {type: 'minlength', message: 'Slot Status Name must be more than 2 characters'},
      {type: 'maxlength', message: 'Slot Status Name must be less than 51 characters'}
    ]
  }

  constructor(
    private service: SlotStatusService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditSlotStatusComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.refreshForm();
  }

  Close(){
    this.dialog.closeAll();
  }

  createForm(){
    this.form = this.formBuilder.group({
      SlotStatusName: [this.data.slotStatusName,
      [Validators.required, Validators.maxLength(50), Validators.minLength(3)]]
    });
  }

  OnSubmit(){
    if(this.form.valid){
      const slotStatus: SlotStatus = this.form.value;
      slotStatus.SlotStatusId = this.data.slotStatusId;
      this.service.UpdateSlotStatus(slotStatus).subscribe(res =>{
        this.refreshForm();
        this.dialogRef.close('add');
      }, (err: HttpErrorResponse) => {
        if(err.status !=200){
          this.notificationsService.failToaster('There was an error!', 'Error');
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
