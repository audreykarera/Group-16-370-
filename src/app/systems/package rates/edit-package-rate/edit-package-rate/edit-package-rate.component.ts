import { PackageRateService } from './../../../../shared/services/package-rate.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { PackageRate } from 'src/app/Interfaces/Index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-package-rate',
  templateUrl: './edit-package-rate.component.html',
  styleUrls: ['./edit-package-rate.component.scss']
})
export class EditPackageRateComponent implements OnInit {
  form: FormGroup;
  packageRate: PackageRate;

  error_messages = {
    PackagePrice: [
      { type: 'required', message: 'Package rate is required' },
      { type: 'minLength', message: 'Rate must be more than 1 character' },
      { type: 'maxLength', message: 'Rate must be less than 5 characters' }
    ],
    PackagePriceDate: [
      { type: 'required', message: 'Package rate date is required' },
      { type: 'minLength', message: 'Rate date must be more than 6 character' },
      { type: 'maxLength', message: 'Rate Date must be less than 10 characters' }
    ]
  }

  constructor(
    public dialog:MatDialog,
    public dialogRef: MatDialogRef<EditPackageRateComponent>,
    private formBuilder: FormBuilder,
    private packageRateService: PackageRateService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
    private notificationService: NotificationsService) { }

    ngOnInit(): void {
     this.createForm();
      this.refreshForm();
    }
  
    Close(){
      this.dialog.closeAll();
    }

      
    createForm(){
      this.form=this.formBuilder.group({
        PackagePrice: [this.data.packagePrice, [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
        PackagePriceDate:[this.data.packagePriceDate, [Validators.required, Validators.maxLength(30), Validators.minLength(2)]]
      })
    }
  
   
  OnSubmit(){
    console.log('Hello')
    if (this.form.valid){
      const packageRate:PackageRate=this.form.value;
      packageRate.PackageRateId=this.data.packageRateId;
      this.packageRateService.UpdatePackageRate(packageRate).subscribe(res=>{
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

    refreshForm(){
      this.packageRate = {
        PackageRateId: 0,
        PackagePrice: 0,
        PackagePriceDate: null
      }
  }
}
