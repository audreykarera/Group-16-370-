import { SlotStatusService } from './../../../../shared/services/slot-status.service';
import { SlotStatus } from './../../../../Interfaces/Index';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-slot-status',
  templateUrl: './create-slot-status.component.html',
  styleUrls: ['./create-slot-status.component.scss']
})
export class CreateSlotStatusComponent implements OnInit {

  form: FormGroup;
  slotStatus: SlotStatus;

  error_messages = {
    SlotStatusName: [
      { type: 'required', message: 'Title description is required' },
      { type: 'minLength', message: 'Title must be more than 1 character' },
      { type: 'maxLength', message: 'Title must be less than 5 characters' }
    ]
  }

  constructor(
    public dialog: MatDialog,
    private service: SlotStatusService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateSlotStatusComponent>
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      SlotStatusName: new FormControl(
        this.slotStatus.SlotStatusName,
        Validators.compose([
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(2)
        ])
      )
    });
  }

  OnSubmit() {
    console.log('Hello')
    if (this.form.valid) {
      this.slotStatus = this.form.value;
      this.service.CreateSlotStatus(this.slotStatus).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
  }

  refreshForm() {
    this.slotStatus = {
      SlotStatusId: 0,
      SlotStatusName: ''
    }
  }

  Close(){
    this.dialog.closeAll();
  }

}
