import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { ServiceType } from 'src/app/Interfaces/Index';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-servicetype',
  templateUrl: './create-servicetype.component.html',
  styleUrls: ['./create-servicetype.component.scss']
})
export class CreateServicetypeComponent implements OnInit {
 form:FormGroup;
 serviceType:ServiceType

  error_messages = {
    ServiceTypeName: [
      { type: 'required', message: 'Service Type name is required' },
      { type: 'minlength', message: 'Service Type must be more than 1 character' },
      { type: 'maxlength', message: 'Service Type must be less than 30 characters' }
    ],
    ServiceTypeDescription: [
      { type: 'required', message: 'Service Type description is required' },
      { type: 'minlength', message: 'Service Type must be more than 1 character' },
      { type: 'maxlength', message: 'Service Type must be less than 30 characters' }
    ]
  }

  constructor(
    private service: ServiceTypeService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<CreateServicetypeComponent>
  ) { }
  
  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
    console.log('Service Types')
  }

  createForm() {
    this.form = this.formBuilder.group({
      ServiceTypeName: new FormControl(
        this.serviceType.ServiceTypeName,
        Validators.compose([
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(2)
        ])
      ),
      ServiceTypeDescription: new FormControl(
        this.serviceType.ServiceTypeDescription,
        Validators.compose([
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(2)
        ])
      ),
    });
  }
      Close(){
        this.dialog.closeAll();
      }
        
      OnSubmit() {
        console.log('Service Type added')
        if (this.form.valid) {
          this.serviceType = this.form.value;
          this.service.CreateServiceType(this.serviceType).subscribe(res => {
            this.refreshForm();
            this.dialogRef.close('add');
          });
        }
      }

      refreshForm(){
        this.serviceType = {
          ServiceTypeId: 0,
          ServiceTypeName: '',
          ServiceTypeDescription:''
        }
      }
}
