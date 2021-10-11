import { ServicePriceService } from './../../../../shared/services/service-price.service';
import { NotificationsService } from './../../../../shared/services/notifications.service';
import { Router } from '@angular/router';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';
import { ServiceService } from 'src/app/shared/services/service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { Service, ServicePrice, ServiceType } from 'src/app/Interfaces/Index';


@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {
  form: FormGroup;
  serviceTable: Service;
  serviceTypes: ServiceType[];
  //servicePrices:ServicePrice[];


  error_messages = {
    ServiceName: [
      { type: 'required', message: 'Service Name is required' },
      { type: 'minLength', message: 'Service Name must be more than 3 character' },
      { type: 'maxLength', message: 'Service Name must be less than 30 characters' }
    ],
    ServiceDescription: [
      { type: 'required', message: 'Service Description is required' },
      { type: 'minLength', message: 'Service Description must be more than 3 character' },
      { type: 'maxLength', message: 'Service Description must be less than 30 characters' }
    ],
    ServicePriceAmount: [
      { type: 'required', message: 'Service Price is required' },
    ],
    ServiceTypeId: [
      { type: 'required', message: 'Service Type is required' },
    ]

    // LocationId: [
    //   { type: 'required', message: 'Location is required' },
    // ]
  }


  constructor(
    private service: ServiceService,
    private serviceTypeService: ServiceTypeService,
    private servicePriceService: ServicePriceService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateServiceComponent>
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
    this.getServiceTypes();

    //this.getServicePrices();
    console.log('Services')
  }

  createForm() {
    this.form = this.formBuilder.group({
      ServiceName: new FormControl(
        this.serviceTable.serviceName,
        Validators.compose([
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3)
        ])
      ),
      ServiceDescription: new FormControl(
        this.serviceTable.serviceDescription,
        Validators.compose([
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3)
        ])
      ),
      ServicePriceAmount: new FormControl(
        this.serviceTable.servicePriceAmount,
        Validators.compose([
          Validators.required,
          Validators.maxLength(30),
          Validators.minLength(2)
        ])
      ),
      ServiceTypeId: new FormControl(
        this.serviceTable.serviceTypeId,
        Validators.compose([
          Validators.required,
          Validators.maxLength(30),
          Validators.minLength(2)
        ])
      )

      // LocationId: new FormControl(
      //   this.serviceTable.LocationId,
      //   Validators.compose([
      //     Validators.required,
      //     Validators.maxLength(30),
      //     Validators.minLength(2)
      //   ])
      // ),
    });
  }

  Close() {
    this.dialog.closeAll();
  }

  OnSubmit() {
    console.log('Service added')
    if (this.form.valid) {
      this.serviceTable = this.form.value;
      console.log(this.serviceTable);
      this.service.CreateService(this.serviceTable).subscribe(res => {

        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
  }

  refreshForm() {
    this.serviceTable = {
      serviceId: 0,
      serviceName: '',
      serviceDescription: '',
      servicePriceAmount: 0,
      serviceTypeId: 0,
      serviceTypeName:'',

      bookingId: 0,
      bookingServiceId: 0
      //ServicePriceId:0,
      // LocationId:0
    }
  }
  getServiceTypes() {
    this.serviceTypeService.getServiceTypes().subscribe((res) => {
      this.serviceTypes = res as ServiceType[];
    })
  }
  // getServicePrices(){
  //   this.servicePriceService.getServicePrices().subscribe((res)=>{
  //     this.servicePrices=res as ServicePrice[];
  //   })
  // }
}
