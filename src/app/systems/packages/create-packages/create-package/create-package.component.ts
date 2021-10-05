import { PackageRateService } from 'src/app/shared/services/package-rate.service';
import { ExtraCollectionPriceService } from './../../../../shared/services/extra-collection-price.service';
import { ServiceService } from './../../../../shared/services/service.service';
import { PackageService } from './../../../../shared/services/package.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Package, ExtraCollectionPrice, Service, PackageRate } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.scss']
})
export class CreatePackageComponent implements OnInit {
  form: FormGroup;
  package: Package;
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
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreatePackageComponent>,
    ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
    this.getPackageRates();
    this.getServices();
    console.log('Packages')
  }

  createForm() {
    this.form = this.formBuilder.group({
      PackageName: new FormControl(
        this.package.PackageName,
          Validators.compose([
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3)
        ])
      ),
      PackageDetails: new FormControl(
        this.package.PackageDetails,
          Validators.compose([
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3)
        ])
      ),
      ServiceId: new FormControl(
        this.package.ServiceId,
        Validators.compose([
          Validators.required,
          Validators.maxLength(30),
          Validators.minLength(2)
        ])
      ),
      PackageRateId: new FormControl(
        this.package.PackageRateId,
          Validators.compose([
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(2)
        ])
      )
    });
  }

  Close(){
    this.dialog.closeAll();
  }

  OnSubmit() {
    console.log('Package Added')
    if (this.form.valid) {
      this.package = this.form.value;
      console.log(this.package);
      this.packageService.CreatePackage(this.package).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
  }


  refreshForm() {
    this.package = {
      PackageId: 0,
      PackagePrice: 0,
      PackageName: ' ',
      PackageDetails: ' ',
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
