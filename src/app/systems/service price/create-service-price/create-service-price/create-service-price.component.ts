import { ServicePriceService } from './../../../../shared/services/service-price.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicePrice } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-create-service-price',
  templateUrl: './create-service-price.component.html',
  styleUrls: ['./create-service-price.component.scss']
})
export class CreateServicePriceComponent implements OnInit {
  form:FormGroup;
  servicePrice:ServicePrice

  error_messages = {
    ServicePriceAmount: [
      { type: 'required', message: 'Service Price is required' },
      { type: 'minLength', message: 'Service Price must be more than 1 character' },
      { type: 'maxLength', message: 'Service Price must be less than 30 characters' }
    ],
    ServicePriceDate: [
      { type: 'required', message: 'Service Price Date is required' },
      { type: 'minLength', message: 'Service Price must be more than 1 character' },
      { type: 'maxLength', message: 'Service Price must be less than 30 characters' }
    ]
  }

  constructor(
    private service: ServicePriceService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<CreateServicePriceComponent>
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
    console.log('Service Prices')
  }

  
  createForm() {
    this.form = this.formBuilder.group({
      ServicePriceAmount: new FormControl(
        this.servicePrice.ServicePriceAmount,
        Validators.compose([
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(2)
        ])
      ),
      ServicePriceDate: new FormControl(
        this.servicePrice.ServicePriceDate,
        Validators.compose([
          Validators.required,
          Validators.maxLength(30),
          Validators.minLength(2)
        ])
      ),
    });
  }
  Close(){
    this.dialog.closeAll();
  }
    
  OnSubmit() {
    console.log('Service Price added')
    if (this.form.valid) {
      this.servicePrice = this.form.value;
      this.service.CreateServicePrice(this.servicePrice).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
  }

  refreshForm(){
    this.servicePrice = {
      ServicePriceId: 0,
      ServicePriceAmount:0,
      ServicePriceDate:''
    }
  }

}
