import { ServicePriceService } from './../../../../shared/services/service-price.service';
import { ServicePrice } from './../../../../Interfaces/Index';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-edit-serviceprice',
  templateUrl: './edit-serviceprice.component.html',
  styleUrls: ['./edit-serviceprice.component.scss']
})
export class EditServicepriceComponent implements OnInit {

  form: FormGroup;
  servicePrice:ServicePrice;
  error_messages = {
    ServicePriceAmount: [
      { type: 'required', message: 'Service Price amount is required' },
      { type: 'minlength', message: 'Service Price must be more than 2 character' },
      { type: 'maxlength', message: 'Service Price must be less than 30 characters' }
    ],
    ServicePriceDate: [
      { type: 'required', message: 'Service Price Date is required' },
      { type: 'minlength', message: 'Service Price Date must be more than 2 character' },
      { type: 'maxlength', message: 'Service Price Date must be less than 30 characters' }
    ]
  }

  constructor(
    public dialog: MatDialog,
    public dialogRef:MatDialogRef<EditServicepriceComponent>,
    private formBuilder:FormBuilder,
    private servicePriceService: ServicePriceService,
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
      ServicePriceAmount: [this.data.servicePriceAmount, [Validators.required, Validators.maxLength(30), Validators.minLength(1)]],
      ServicePriceDate:[this.data.servicePriceDate, [Validators.required, Validators.maxLength(30), Validators.minLength(2)]]
    })
  }

  OnSubmit(){
    console.log('Hello')
    if (this.form.valid){
      const servicePrice:ServicePrice=this.form.value;
      servicePrice.servicePriceId=this.data.servicePriceId;
      this.servicePriceService.UpdateServicePrice(servicePrice).subscribe(res=>{
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
    this.servicePrice = {
      servicePriceId: 0,
      ServicePriceAmount: 0,
      ServicePriceDate: null
    }
  }

}
