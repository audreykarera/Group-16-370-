import { PackageService } from '../../../../shared/services/package.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { Package, PackageRate, Service } from 'src/app/Interfaces/Index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackageRateService } from 'src/app/shared/services/package-rate.service';
import { ServiceService } from 'src/app/shared/services/service.service';
import { CreatePackageComponent } from '../../create-packages/create-package/create-package.component';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-packages',
  templateUrl: './edit-packages.component.html',
  styleUrls: ['./edit-packages.component.scss']
})
export class EditPackagesComponent implements OnInit {
  form: FormGroup;
  packageList: Package;
  services: Service[];
  packageRates: PackageRate[];


  error_messages = {
    PackageName: [
      { type: 'required', message: 'Package Name is required' },
      { type: 'minLength', message: 'Package Name must be more than 3 character' },
      { type: 'maxLength', message: 'Package Name must be less than 60 characters' }

    ],
    PackageDetails: [
      { type: 'required', message: 'Package details are required' },
      { type: 'minLength', message: 'Package details must be more than 3 character' },
      { type: 'maxLength', message: 'Package details must be less than 60 characters' }
    ],
    ServiceId: [
      { type: 'required', message: 'Service is required' },
    ],
    PackageRateId: [
      { type: 'required', message: 'Package Rate is required' },
    ]

  }

  constructor(
    private packageService: PackageService,
    private serviceService: ServiceService,
    private packageRateService: PackageRateService,
    private notificationService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreatePackageComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
     ) { }


    ngOnInit(): void {
      this.createForm();
      this.refreshForm();
      this.getServices();
      this.getPackageRates();
    }

  Close(){
    this.dialog.closeAll();
  }

  createForm(){
    this.form=this.formBuilder.group({
      PackageName: [this.data.packageName, [Validators.required, Validators.maxLength(60), Validators.minLength(3)]],
      PackageDetails:[this.data.packageDetails, [Validators.required, Validators.maxLength(60), Validators.minLength(3)]],
      ServiceId:[this.data.serviceName,[Validators.required, Validators.maxLength(30), Validators.minLength(1)]],
      PackageRateId:[this.data.packagePrice,[Validators.required, Validators.maxLength(30), Validators.minLength(1)]]

    });
  }

  OnSubmit(){
    if (this.form.valid){
       const packageList:Package=this.form.value;
       packageList.PackageId=this.data.packageId;
       console.log(this.packageList);
       this.packageService.UpdatePackage(packageList).subscribe(res=>{
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
    this.packageList = {
      PackageId: 0,
      PackagePrice: 0,
      PackageName: '',
      PackageDetails: '',
      ServiceId: 0,
      PackageRateId: 0
    }
  }
  getServices(){
    this.serviceService.getServices().subscribe((res)=>{
      this.services=res as Service[];
    })
  }
  getPackageRates(){
    this.packageRateService.getPackageRates().subscribe((res)=>{
      this.packageRates=res as PackageRate[];
    })
  }

}
