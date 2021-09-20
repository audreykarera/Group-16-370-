import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmploymentStatus } from 'src/app/Interfaces/Index';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { EmploymentStatusService } from 'src/app/shared/services/employment-status.service';
import { id } from '@swimlane/ngx-charts';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-employment-status',
  templateUrl: './edit-employment-status.component.html',
  styleUrls: ['./edit-employment-status.component.scss']
})
export class EditEmploymentStatusComponent implements OnInit {
  form: FormGroup;
  employmentStatus: EmploymentStatus

  error_messages = {
    EmploymentStatusName: [
      { type: 'required', message: 'Employment Status description is required' },
      { type: 'minlength', message: 'Employment Status must be more than 2 character' },
      { type: 'maxlength', message: 'Employment Status must be less than 10 characters' }
    ]
  }

  constructor(
    private service: EmploymentStatusService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditEmploymentStatusComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.refreshForm();
  }

  Close() {
    this.dialog.closeAll();
  }

  createForm() {
    this.form = this.formBuilder.group({
      EmploymentStatusName: [this.data.employmentStatusName, [Validators.required, Validators.maxLength(10), Validators.minLength(2)]]
    })
  }

  OnSubmit() {
    console.log('Hello')
    if (this.form.valid) {
      const employmentStatus: EmploymentStatus = this.form.value;
      employmentStatus.EmploymentStatusId = this.data.employmentStatusId;
      this.service.UpdateEmployeeStatus(employmentStatus).subscribe(res => {
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
    this.employmentStatus = {
      EmploymentStatusId: 0,
      EmploymentStatusName: ''
    }

  }

}
