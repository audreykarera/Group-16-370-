import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PackageRate } from 'src/app/Interfaces/Index';

import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { PackageRateService } from 'src/app/shared/services/package-rate.service';

@Component({
  selector: 'app-create-package-rate',
  templateUrl: './create-package-rate.component.html',
  styleUrls: ['./create-package-rate.component.scss']
})
export class CreatePackageRateComponent implements OnInit {

  form: FormGroup;
  rate: PackageRate;

  error_messages = {
    PackageRatePrice: [
      { type: 'required', message: 'Package rate is required' },
      { type: 'minLength', message: 'Rate must be more than 1 character' },
      { type: 'maxLength', message: 'Rate must be less than 5 characters' }
    ],
    PackagePriceDate: [
      { type: 'required', message: 'Package rate date is required' },
      { type: 'minLength', message: 'Rate date must be more than 6 character' },
      { type: 'maxLength', message: 'Rate must be less than 6 characters' }
    ]
  }

  constructor(
    private service: PackageRateService,
    public dialog:MatDialog,
    private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<CreatePackageRateComponent>
    ) { }

    ngOnInit(): void {
      this.refreshForm();
      this.createForm();
    }
    createForm() {
      this.form = this.formBuilder.group({
        PackageRatePrice: new FormControl(
          this.rate.PackageRatePrice,
            Validators.compose([
            Validators.required,
            Validators.maxLength(4),
            Validators.minLength(2)
          ])
          
        )
      });
     this.form = this.formBuilder.group({
     PackagePriceDate: new FormControl(
     this.rate.PackagePriceDate,
      Validators.compose([
      Validators.required,
      Validators.maxLength(6),
      Validators.minLength(6)
       ])
          
       )
      });
    }
  
    Close() {
      this.dialog.closeAll();
    }
  
    OnSubmit() {
      if (this.form.valid) {
        this.rate = this.form.value;
        this.service.CreatePackageRate(this.rate).subscribe(res => {
          this.refreshForm();
          this.dialogRef.close('add');
        });
      }
    }
  
    refreshForm() {
      this.rate = {
        PackageRateId: 0,
        PackageRatePrice: '',
        PackagePriceDate: ''
      }
    }


  
}
