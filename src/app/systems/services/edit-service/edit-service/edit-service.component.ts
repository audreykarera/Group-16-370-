
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { Service, ServicePrice, ServiceType } from 'src/app/Interfaces/Index';

import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { ServiceService } from 'src/app/shared/services/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';
import { ServicePriceService } from 'src/app/shared/services/service-price.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})

export class EditServiceComponent implements OnInit {
  form:FormGroup;
  serviceList: Service;
  serviceTypes:ServiceType[];
  //servicePrices:ServicePrice[];

  error_messages = {
    ServiceName: [
      { type: 'required', message: 'Service Name is required' },
      { type: 'minLength', message: 'Service Name must be more than 1 character' },
      { type: 'maxLength', message: 'Service Name must be less than 30 characters' }
    ],
    ServiceDescription: [
      { type: 'required', message: 'Service Description is required' },
      { type: 'minLength', message: 'Service Description must be more than 1 character' },
      { type: 'maxLength', message: 'Service Description must be less than 60 characters' }
    ],
    ServicePriceAmount: [
      { type: 'required', message: 'Service Price is required' },
    ],
    ServiceTypeId: [
      { type: 'required', message: 'Service Type is required' },
    ]
    // ServicePriceId: [
    //   { type: 'required', message: 'Service Price is required' },
    // ]
  }

  constructor(
    private serviceService:ServiceService,
    private serviceTypeService: ServiceTypeService,
    private servicePriceService:ServicePriceService,
    private notificationService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditServiceComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
     ) { }

     ngOnInit(): void {
      this.createForm();
      this.refreshForm();
      this.getServiceTypes();
      //this.getServicePrices();

    }

    Close(){
      this.dialog.closeAll();
    }

    createForm(){
      this.form=this.formBuilder.group({
        ServiceName: [this.data.serviceName, [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
        ServiceDescription:[this.data.serviceDescription, [Validators.required, Validators.maxLength(60), Validators.minLength(2)]],
        ServicePriceAmount:[this.data.servicePriceAmount,[Validators.required, Validators.maxLength(30), Validators.minLength(1)]],
        ServiceTypeId:[this.data.serviceTypeName,[Validators.required, Validators.maxLength(30), Validators.minLength(1)]],
        //ServicePriceId:[this.data.servicePriceAmount,[Validators.required, Validators.maxLength(30), Validators.minLength(1)]]

      });
    }

    OnSubmit(){
      if (this.form.valid){
         const serviceList:Service=this.form.value;
         serviceList.serviceId=this.data.serviceId;
         console.log(this.serviceList);
         this.serviceService.UpdateService(serviceList).subscribe(res=>{
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
      this.serviceList = {
        serviceId: 0,
        serviceName: '',
        serviceDescription:'',
        servicePriceAmount:0,
        serviceTypeId:0,
        serviceTypeName:'',

        bookingId:0,
        bookingServiceId:0
        //ServicePriceId:0,
        // LocationId:0
      }
    }

    getServiceTypes(){
      this.serviceTypeService.getServiceTypes().subscribe((res)=>{
        this.serviceTypes=res as ServiceType[];
      })
    }
    // getServicePrices(){
    //   this.servicePriceService.getServicePrices().subscribe((res)=>{
    //     this.servicePrices=res as ServicePrice[];
    //   })
    // }


}
