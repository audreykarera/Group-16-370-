import { Component, OnInit } from '@angular/core';
import { EmployeeType } from 'src/app/Interfaces/Index';
import { EmployeeTypeService } from 'src/app/shared/services/employee-type.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee-type',
  templateUrl: './add-employee-type.component.html',
  styleUrls: ['./add-employee-type.component.scss']
})
export class AddEmployeeTypeComponent implements OnInit {
  form: FormGroup;
  employeeType: EmployeeType

  error_messages = {
    EmployeeTypeName: [
      { type: 'required', message: 'Employee Type description is required' },
      { type: 'minlength', message: 'Employee Type must be more than 2 character' },
      { type: 'maxlength', message: 'Employee Type must be less than 20 characters' }
    ]
  }

  constructor(
    private service: EmployeeTypeService, 
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEmployeeTypeComponent>
  ) { }

  ngOnInit(): void {
    this.refreshForm()
    this.createForm();
  }

  Close(){
    this.dialog.closeAll();
  }

  createForm(){
    this.form = this.formBuilder.group({
      EmployeeTypeName: new FormControl(
        this.employeeType.EmployeeTypeName, 
          [Validators.required, 
          Validators.maxLength(20),
          Validators.minLength(2)]
      )
    })
  }


  OnSubmit() {
    console.log('Hello')
    if (this.form.valid) {
      this.employeeType = this.form.value;
      this.service.CreateEmployeeType(this.employeeType).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
  }

  refreshForm(){
    this.employeeType = {
      EmployeeTypeId: 0,
      EmployeeTypeName: ''
    }
  }
}
