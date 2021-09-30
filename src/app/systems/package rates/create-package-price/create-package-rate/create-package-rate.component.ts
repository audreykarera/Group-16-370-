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
  packageRate: PackageRate;

  error_messages = {
    PackagePrice: [
      { type: 'required', message: 'Package Rate Price is required' },
      { type: 'minLength', message: 'Package Rate Price  must be more than 1 character' },
      { type: 'maxLength', message: 'Package Rate Price  must be less than 5 characters' }
    ],
    PackagePriceDate: [
      { type: 'required', message: 'Package Price Date is required' },
      { type: 'minLength', message: 'Package Price Date must be more than 6 character' },
      { type: 'maxLength', message: 'Package Price Date must be less than 10 characters' }
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
      console.log('Package Rates')
    }

    createForm() {
      this.form = this.formBuilder.group({
        PackagePrice: new FormControl(
          this.packageRate.PackagePrice,
            Validators.compose([
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(2)
          ])          
        ),
        PackagePriceDate: new FormControl(
          (new Date()).toISOString().substring(0, 10)
        )
      })
    }

    Close() {
      this.dialog.closeAll();
    }
  
    OnSubmit() {
      console.log('Package Rate added')
      if (this.form.valid) {
        this.packageRate = this.form.value;
        this.service.CreatePackageRate(this.packageRate).subscribe(res => {
          this.refreshForm();
          this.dialogRef.close('add');
        });
      }
    }
  
    refreshForm() {
      this.packageRate = {
        PackageRateId: 0,
        PackagePrice: 0,
        PackagePriceDate: null
      }
    }  
}
