import { HttpClient } from '@angular/common/http';
import { EditPackagesComponent } from './../../edit-packages/edit-packages/edit-packages.component';
import { CreatePackageComponent } from './../../create-packages/create-package/create-package.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface, } from 'src/app/Interfaces/dialog.interface';

export class Package{
  constructor(
    public packageName: string,
    public packageDetails: string,
    public packageRateDate: string
  ){
  }
  
}

@Component({
  selector: 'app-read-packages',
  templateUrl: './read-packages.component.html',
  styleUrls: ['./read-packages.component.scss']
})
export class ReadPackagesComponent implements OnInit {


  packages: Package[];
  constructor(private HttpClient: HttpClient,
    public router: Router,
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.getPackages();

  }

  getPackages(){
    this.HttpClient.get<any>('http://localhost:60000/api/package/getpackage').subscribe(
      Response => {
        console.log(Response);
        this.packages = Response;

      }
    );
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
