import { Router } from '@angular/router';
import { NotificationsService } from './../../../../shared/services/notifications.service';
import { MatDialog } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';
import { PaymentType } from 'src/app/models/paymentType';
import { PaymentTypeService } from 'src/app/shared/services/payment-type.service';

@Component({
  selector: 'app-create-payment-type',
  templateUrl: './create-payment-type.component.html',
  styleUrls: ['./create-payment-type.component.scss']
})
export class CreatePaymentTypeComponent implements OnInit {
  paymentType:PaymentType;
  paymentTypeList: PaymentType[];

  constructor(private paymentTypeService:PaymentTypeService,
    public dialog:MatDialog,
    private notificationService:NotificationsService,
    public router:Router) { }

    ngOnInit(): void {
      this.refreshForm();
    }
  
    Close(){
      this.dialog.closeAll();
    }
  
  
    onSave(){
      this.paymentTypeService.postPaymentType(this.paymentType).subscribe((res)=>{
        this.paymentType = res as PaymentType; 
      });
      this.Close();
      this.notificationService.successToaster("Successfully saved Payment Type", "Success Message");
      setTimeout(()=>{
        window.location.reload();
      }, 1000);
    }
  
    //This method rfreshes the form verytime something is done. That is why it is called in the OnInit
    refreshForm(){
      this.paymentType = {
        PaymentTypeId: 0,
        PaymentTypeName: ''
    }

  }
}
