import { PackageRateService } from './../../../../shared/package rate service/package-rate.service';
import { PackageRate } from './../../../../models/packageRate';
import { PackageService } from './../../../../shared/package service/package.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EditPackagesComponent } from './../../edit-packages/edit-packages/edit-packages.component';
import { CreatePackageComponent } from './../../create-packages/create-package/create-package.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { Observable } from 'rxjs';
import { Package } from 'src/app/models/package';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';



@Component({
  selector: 'app-read-packages',
  templateUrl: './read-packages.component.html',
  styleUrls: ['./read-packages.component.scss']
})
export class ReadPackagesComponent implements OnInit {
  PackageService: any;
  packages: Package[] = [];
  packages$: Observable<Package[]> = this.servicePackage.getPackages();
  packagerates: PackageRate[] = [];
  packagerates$: Observable<PackageRate[]> = this.servicePackageRate.getPackageRates();


  constructor(
    public servicePackage: PackageService,
    public servicePackageRate: PackageRateService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.readPackage();
  }
  readPackage(){
    this.packages$.subscribe(data=>{
      this.packages=data;
      console.log(this.packages);
    }, (err:HttpErrorResponse)=>{
      console.log(err);
    })
  } 
  readPackageRates(){
    this.packagerates$.subscribe(data=>{
      this.packagerates=data;
      console.log(this.packagerates);
    }, (err:HttpErrorResponse)=>{
      console.log(err);
    })
  } 

  routerAddPackage() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreatePackageComponent, 
      dialogConfig
    );
  }

  routerEditPackage() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditPackagesComponent, 
      dialogConfig
    );

}

openDeleteDialog() {
  const dialogInterface: DialogInterface = {
    dialogHeader: 'Confirmation Message',
    dialogContent: 'Are you sure you want to delete this?',
    cancelButtonLabel: 'No',
    confirmButtonLabel: 'Yes',
    callbackMethod: () => {
     
    },
  };
  this.dialog.open(SharedComponent, {
    width: '300px',
    data: dialogInterface,
  });
}

}
