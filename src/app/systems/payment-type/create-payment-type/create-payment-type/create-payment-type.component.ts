
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from './../../../../shared/services/notifications.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { PaymentTypeService } from 'src/app/shared/services/payment-type.service';
import { PaymentType } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-create-payment-type',
  templateUrl: './create-payment-type.component.html',
  styleUrls: ['./create-payment-type.component.scss']
})
export class CreatePaymentTypeComponent implements OnInit {

  form: FormGroup;
  paymentType: PaymentType;

  error_messages = {
    PaymentTypeName: [
      { type: 'required', message: 'Title description is required' },
      { type: 'minlength', message: 'Title must be more than 1 character' },
      { type: 'maxlength', message: 'Title must be less than 5 characters' }
    ]
  }

  constructor(
    private service: PaymentTypeService,
    public dialog:MatDialog,
    private formBuilder: FormBuilder,
    // private notificationService:NotificationsService,
    public dialogRef: MatDialogRef<CreatePaymentTypeComponent>
    ) { }

    ngOnInit(): void {
      this.refreshForm();
      this.createForm();
    }

    createForm(){
      this.form = this.formBuilder.group({
        PaymentTypeName: new FormControl(
          this.paymentType.PaymentTypeName,
          Validators.compose([
            Validators.required,
            Validators.maxLength(4),
            Validators.minLength(2)
          ])
        )
      });
    }

    Close(){
      this.dialog.closeAll();
    }

    onSubmit(){
      console.log('Hello');
      if(this.form.valid){
        this.paymentType = this.form.value;
        this.service.CreatePaymentType(this.paymentType).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
        });
      }
    }

    refreshForm() {
      this.paymentType = {
        PaymentTypeId: 0,
        PaymentTypeName: ''
      }
    }


  }


