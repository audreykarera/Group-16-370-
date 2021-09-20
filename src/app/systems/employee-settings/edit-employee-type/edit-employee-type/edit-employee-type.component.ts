import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeType } from 'src/app/Interfaces/Index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeTypeService } from 'src/app/shared/services/employee-type.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-employee-type',
  templateUrl: './edit-employee-type.component.html',
  styleUrls: ['./edit-employee-type.component.scss']
})
export class EditEmployeeTypeComponent implements OnInit {
  form: FormGroup;
  employeeType: EmployeeType;

  error_messages = {
    EmployeeTypeName: [
      { type: 'required', message: 'Employee Type description is required' },
      { type: 'minlength', message: 'Employee Type must be more than 3 character' },
      { type: 'maxlength', message: 'Employee Type must be less than 20 characters' }
    ]
  }

  constructor(
    private service: EmployeeTypeService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditEmployeeTypeComponent>,
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
      EmployeeTypeName: [this.data.employeeTypeName, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]]
    })
  }

  OnSubmit() {
    console.log('Hello')
    if (this.form.valid) {
      const employeeType: EmployeeType = this.form.value;
      employeeType.EmployeeTypeId = this.data.employeeTypeId;
      this.service.UpdateEmployeeType(employeeType).subscribe(res => {
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
    this.employeeType = {
      EmployeeTypeId: 0,
      EmployeeTypeName: ''
    }

  }

}
