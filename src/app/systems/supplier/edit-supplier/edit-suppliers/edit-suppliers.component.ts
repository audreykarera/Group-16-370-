import { EditBookingStatusComponent } from './../../../booking-status/edit-booking-status/edit-booking-status/edit-booking-status.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { SupplierService } from 'src/app/shared/services/supplier.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { Supplier } from 'src/app/Interfaces/Index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-suppliers',
  templateUrl: './edit-suppliers.component.html',
  styleUrls: ['./edit-suppliers.component.scss']
})
export class EditSuppliersComponent implements OnInit {
  form: FormGroup;
  supplier: Supplier

  error_messages = {
    SupplierName: [
      { type: 'required', message: 'Name description is required' },
      { type: 'minlength', message: 'Name must be more than 1 character' },
      { type: 'maxlength', message: 'Name must be less than 50 characters' }
    ],
    SupplierContactPersonEmail: [
      { type: 'required', message: 'Email Address is required' },
      { type: 'minlength', message: 'Email Address must be more than 1 character' },
      { type: 'maxlength', message: 'Email Address must be less than 50 characters' }
    ],
    SupplierContactPersonNumber: [
      { type: 'required', message: 'Cell Number is required' },
      { type: 'minlength', message: 'Cell Number must be more than 1 character' },
      { type: 'maxlength', message: 'Cell Number must be less than 11 characters' }
    ]
  }
  constructor(private supplierService: SupplierService,
    public dialog: MatDialog, 
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditBookingStatusComponent>,
    private notificationService: NotificationsService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,) { }
  
  ngOnInit(): void {
    this.createForm();
    this.refreshForm();
  }

  Close(){
    this.dialog.closeAll();
  }

  createForm() {
    this.form = this.formBuilder.group({
      SupplierName: [this.data.supplierName, [Validators.required, Validators.maxLength(49), Validators.minLength(2)]],
      SupplierContactPersonEmail: [this.data.supplierContactPersonEmail, [Validators.required, Validators.maxLength(49), Validators.minLength(2)]],
      SupplierContactPersonNumber: [this.data.supplierContactPersonNumber, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    })
  }
  OnSubmit() {
    console.log('Hello')
    if (this.form.valid) {
      const supplier: Supplier = this.form.value;
      supplier.SupplierId = this.data.supplierId;
      this.supplierService.UpdateSupplier(supplier).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      }, (err: HttpErrorResponse) => {
        if(err.status != 200){
          this.notificationService.failToaster('There was an error!', 'Error');
        }
      }
      );
    }
  }
  refreshForm(){
    this.supplier = {
      SupplierId: 0,
      SupplierName: '',
      SupplierContactPersonNumber: '', 
      SupplierContactPersonEmail:''
    }
  }

}

