import { PaymentType } from './../../../../Interfaces/Index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

import { PaymentTypeService } from 'src/app/shared/services/payment-type.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-payment-type',
  templateUrl: './edit-payment-type.component.html',
  styleUrls: ['./edit-payment-type.component.scss']
})
export class EditPaymentTypeComponent implements OnInit {

  form: FormGroup;
  paymentType: PaymentType;

  error_messages = {
    PaymentTypeName: [
      { type: 'required', message: 'Payment Type Name is required' },
      { type: 'minlength', message: 'Payment Type must be more than 2 characters' },
      { type: 'maxlength', message: 'Payment Type must be less than 5 characters' }
    ]
  }

  constructor(
    private service: PaymentTypeService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditPaymentTypeComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private notificationService: NotificationsService
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
      PaymentTypeName: [this.data.paymentTypeName,
        [Validators.required, Validators.maxLength(4), Validators.minLength(2)]]
    });
  }

  OnSubmit(){
    if(this.form.valid) {
      const paymentType: PaymentType = this.form.value;
      paymentType.PaymentTypeId = this.data.paymentTypeId;
      this.service.UpdatePaymentType(paymentType).subscribe(res=> {
        this.refreshForm();
        this.dialogRef.close('add');
      }, (err: HttpErrorResponse) => {
        if(err.status !=200){
          this.notificationService.failToaster('There was an error!', 'Error');
        }
      }
      );
    }
  }

  refreshForm(){
    this.paymentType = {
      PaymentTypeId: 0,
      PaymentTypeName: ''
    }
  }

}
