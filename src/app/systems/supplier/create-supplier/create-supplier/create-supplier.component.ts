import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';

import { SupplierService } from 'src/app/shared/services/supplier.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Supplier } from 'src/app/Interfaces/Index';


@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.scss']
})
export class CreateSupplierComponent implements OnInit {
  form: FormGroup;
  supplier: Supplier

  error_messages = {
    SupplierName: [
      { type: 'required', message: 'Name description is required' },
      { type: 'minLength', message: 'Name must be more than 1 character' },
      { type: 'maxLength', message: 'Name must be less than 20 characters' }
    ],
    SupplierContactPersonEmail: [
      { type: 'required', message: 'Email Address is required' },
      { type: 'minLength', message: 'Email Address must be more than 1 character' },
      { type: 'maxLength', message: 'Email Address must be less than 50 characters' }
    ],
    SupplierContactPersonNumber: [
      { type: 'required', message: 'Cell Number is required' },
      { type: 'minLength', message: 'Cell Number must be more than 1 character' },
      { type: 'maxLength', message: 'Cell Number must be less than 11 characters' }
    ]
  }

  constructor(private supplierService: SupplierService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateSupplierComponent>
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
    console.log('Hello')
  }
  createForm() {
    this.form = this.formBuilder.group({
      SupplierName: new FormControl(
          this.supplier.SupplierName,
          Validators.compose([
            Validators.required,
            Validators.maxLength(19),
            Validators.minLength(2)
          ])
        ),
        SupplierContactPersonEmail: new FormControl(
          this.supplier.SupplierContactPersonEmail,
          Validators.compose([
            Validators.required,
            Validators.maxLength(49),
            Validators.minLength(2)
          ])
      ),
      SupplierContactPersonNumber: new FormControl(
        this.supplier.SupplierContactPersonNumber,
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2)
        ])
    )
    });
  }
  
  Close() {
    this.dialog.closeAll();
  }

  OnSubmit() {
    console.log('Hello')
    if (this.form.valid) {
      this.supplier = this.form.value;
      this.supplierService.CreateSupplier(this.supplier).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
  }

  refreshForm() {
    this.supplier = {
      SupplierId: 0,
      SupplierName: '',
      SupplierContactPersonNumber: '',
      SupplierContactPersonEmail: ''
    }
  }

}

  // onSave(){
  //   this.supplierService.postSupplier(this.supplier).subscribe((res)=>{
  //     this.supplier = res as Supplier; //Again... Look at line 14 for the supplier we are referring to
  //   });
  //   this.Close();
  //   this.notificationService.successToaster("Successfully saved supplied", "Error");
  //   setTimeout(()=>{
  //     window.location.reload();
  //   }, 1000);
  

  

  //This method rfreshes the form verytime something is done. That is why it is called in the OnInit
  

 

