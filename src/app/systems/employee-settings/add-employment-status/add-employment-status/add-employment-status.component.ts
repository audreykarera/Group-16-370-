import { NotificationsService } from './../../../../shared/services/notifications.service';
import { EmploymentStatusService } from './../../../../shared/services/employment-status.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmploymentStatus } from 'src/app/Interfaces/Index';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employment-status',
  templateUrl: './add-employment-status.component.html',
  styleUrls: ['./add-employment-status.component.scss']
})
export class AddEmploymentStatusComponent implements OnInit {
  form: FormGroup;
  employmentStatus: EmploymentStatus

  error_messages = {
    EmploymentStatusName: [
      { type: 'minLength', message: 'Employment Status must be more than 2 character' },
      { type: 'required', message: 'Employment Status description is required' },
      { type: 'maxLength', message: 'Employment Status must be less than 10 characters' }
    ]
  }

  constructor(
    private service: EmploymentStatusService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEmploymentStatusComponent>
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
  }

  Close() {
    this.dialog.closeAll();
  }

  createForm() {
    this.form = this.formBuilder.group({
      EmploymentStatusName: new FormControl(
        this.employmentStatus.EmploymentStatusName,
        Validators.compose([
          Validators.maxLength(10),
          Validators.required,
          Validators.minLength(3)
        ])
      )
    })
  }

  OnSubmit() {
    console.log('Hello')
    if (this.form.valid) {
      this.employmentStatus = this.form.value;
      this.service.CreateEmploymentStatus(this.employmentStatus).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
  }

  refreshForm() {
    this.employmentStatus = {
      EmploymentStatusId: 0,
      EmploymentStatusName: ''
    }

  }
}

