import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { ServiceType } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-edit-servicetype',
  templateUrl: './edit-servicetype.component.html',
  styleUrls: ['./edit-servicetype.component.scss']
})

export class EditServicetypeComponent implements OnInit {
  form: FormGroup;
  serviceType:ServiceType;
  error_messages = {
    ServiceTypeName: [
      { type: 'required', message: 'Service Type name is required' },
      { type: 'minlength', message: 'Service Type must be more than 2 character' },
      { type: 'maxlength', message: 'Service Type must be less than 30 characters' }
    ],
    ServiceTypeDescription: [
      { type: 'required', message: 'Service Type description is required' },
      { type: 'minlength', message: 'Service Type must be more than 2 character' },
      { type: 'maxlength', message: 'Service Type must be less than 30 characters' }
    ]
  }

  constructor(
    private serviceTypeService:ServiceTypeService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditServicetypeComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private notificationService: NotificationsService) { };

  ngOnInit(): void {    
    this.createForm(); 
    this.refreshForm();   
  }
 
  Close(){
    this.dialog.closeAll();
  }

  createForm(){
    this.form=this.formBuilder.group({
      ServiceTypeName: [this.data.serviceTypeName, [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
      ServiceTypeDescription:[this.data.serviceTypeDescription, [Validators.required, Validators.maxLength(30), Validators.minLength(2)]]
    });
  }

  OnSubmit(){
   if (this.form.valid){
      const serviceType:ServiceType=this.form.value;
      serviceType.ServiceTypeId=this.data.serviceTypeId;
      this.serviceTypeService.UpdateServiceType(serviceType).subscribe(res=>{
        this.refreshForm();
        this.dialogRef.close('add');
      }, (err:HttpErrorResponse)=>{
        if (err.status!=200){
          this.notificationService.failToaster('There was an error!', 'Error');
        }
      }
    );
    }
  }

  refreshForm() {
    this.serviceType = {
      ServiceTypeId: 0,
      ServiceTypeName: '',
      ServiceTypeDescription: ''
    }
  }
}
