
import { PackageRate } from './../../../../models/packageRate';
import { PackageService } from '../../../../shared/services/package.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EditPackagesComponent } from './../../edit-packages/edit-packages/edit-packages.component';
import { CreatePackageComponent } from './../../create-packages/create-package/create-package.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { Observable } from 'rxjs';
import { Package } from 'src/app/models/package';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { PackageRateService } from 'src/app/shared/services/package-rate.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PackageTable {
  packagename: string;
  pricerate: number;
  description: string;
} 

const ELEMENT_DATA: PackageTable[] = [
  {packagename: 'FULL WEEK', pricerate: 850, description: 'The skip is on your property for the whole week'},
];

@Component({
  selector: 'app-read-packages',
  templateUrl: './read-packages.component.html',
  styleUrls: ['./read-packages.component.scss']
})
export class ReadPackagesComponent implements OnInit {
  
  // packageList: Package;
  // packageRateList: PackageRate[];
  // searchText = '';

  displayedColumns: string[] = ['packagename', 'pricerate', 'description', 'edit', 'delete'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    // private servicePackage: PackageService,
    // private servicePackageRate: PackageRateService,
    public dialog: MatDialog
    //private notificationService: NotificationsService
  ) { }

 
  ngOnInit(): void {
    //this.readPackage();
  }

  // readPackage(){
  //   this.servicePackage.getPackages().subscribe((res)=>{
  //     this.packageList =res as Package;
  //   },(err: HttpErrorResponse)=>{
  //     this.notificationService.failToaster("Unable to display service types", "Error");
  //     console.log(err);
  //   })
  // }

  // readServiceType(){
  //   this.servicePackageRate.getPackageRate().subscribe((res)=>{
  //     this.packageRateList=res as PackageRate[];
  //   })
  // }
  

  routerAddPackage() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreatePackageComponent, 
      dialogConfig
    );
  }

  routerEditPackage(packageId: number, packageName: string, packageDetails: string, packageRate: PackageRate[]) {
    console.log(packageId, packageName, packageDetails, packageRate)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditPackagesComponent, 
      {
        disableClose:false,
        data:{
          packageId,
          packageName,
          packageDetails,
          packageRate
        }
      }
    
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
