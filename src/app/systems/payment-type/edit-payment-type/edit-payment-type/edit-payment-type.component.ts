import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { PaymentType } from 'src/app/models/paymentType';
import { PaymentTypeService } from 'src/app/shared/services/payment-type.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-edit-payment-type',
  templateUrl: './edit-payment-type.component.html',
  styleUrls: ['./edit-payment-type.component.scss']
})
export class EditPaymentTypeComponent implements OnInit {
  paymentType:PaymentType;
  constructor(private paymentTypeService:PaymentTypeService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
    private notificationService: NotificationsService) { }

    ngOnInit(): void {
      console.log(this.data);
      this.refreshForm();
    }
  
    Close(){
      this.dialog.closeAll();
    }

    onSave(){
      this.paymentTypeService.patchPaymentType(this.paymentType).subscribe((res)=>{
        this.paymentType = res as PaymentType; 
      });
      this.Close();
      this.notificationService.successToaster("Successfully saved Payment Type", "Error");
      setTimeout(()=>{
        window.location.reload();
      }, 1000);
    }
  
    refreshForm(){
      this.paymentType = {
        PaymentTypeId: 0,
        PaymentTypeName: ''
      }
  }
}
