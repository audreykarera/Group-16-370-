import { ExtraCollection } from './../../../extra-collection/read-extra-collection/read-extra-collection.component';

import { PackageService } from '../../../../shared/services/package.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EditPackagesComponent } from './../../edit-packages/edit-packages/edit-packages.component';
import { CreatePackageComponent } from './../../create-packages/create-package/create-package.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { Observable } from 'rxjs';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { PackageRateService } from 'src/app/shared/services/package-rate.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Package, PackageRate } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-read-packages',
  templateUrl: './read-packages.component.html',
  styleUrls: ['./read-packages.component.scss']
})
export class ReadPackagesComponent implements OnInit {
  
  packageList: Package[] = [];
  packages$: Observable<Package[]> = this.service.getPackages();
  package: Package

  displayedColumns: string[] = ['packagename', 'pricerate', 'description', 'extracollection', 'extraprice','servicename', 'edit', 'delete'];
  dataSource = new MatTableDataSource (this.packageList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();''
  }

  constructor(
    private service: PackageService,
    public dialog: MatDialog,
    private notificationsService: NotificationsService,) { }

 
  ngOnInit(): void {
    this.getPackages();
    this.refreshForm();
  }
  refreshForm() {
    this.package = {
    PackageId: 0,
    PackageName: '',
    PackageDetails: '',
    PackagePrice:'',
    ExtraCollection: true,
    ExtraPriceAmount:0,
    ServiceName:''
    }
  }

  Close() {
    this.dialog.closeAll();
  }

  getPackages(){
    this.packages$.subscribe(res=>{
      if(res){
        this.packageList = res; 
        console.log(res);
      }
    });
  }

  DeletePackage(id){
    console.log(id);
    this.service.DeletePackage(id).subscribe((res)=>{
        this.notificationsService.successToaster('Package Deleted', 'Success'); 
        this.getPackages();
    });
    
  }

  routerAddPackage() {
    const dialog = new MatDialogConfig();
      dialog.disableClose = true;
      dialog.width = 'auto';
      dialog.height = 'auto';
      dialog.data = {add: 'yes'};
      const dialogReference = this.dialog.open(
        CreatePackageComponent,
        dialog
      );
      dialogReference.afterClosed().subscribe((res)=>{
        if(res == 'add'){
          this.notificationsService.successToaster('Package Added', 'Success'); 
          this.getPackages();
        }
      });
    }
  

  routerEditPackage(packageId: number, packageName: string, packageDetails: string, extraCollection: boolean, packagePrice: string, extraPriceAmount: string, serviceName: string) {
  const dialog= new MatDialogConfig();
  dialog.disableClose = true;
  dialog.width = 'auto';
  dialog.height = 'auto';
  dialog.data = {add: 'yes'};
  const dialogReference = this.dialog.open(
    EditPackagesComponent,
    {
      data: {packageId:packageId, packageName:packageName,packageDetails:packageDetails, extraCollection:extraCollection,packagePrice:packagePrice, extraPriceAmount:extraPriceAmount,serviceName:serviceName}
    }
  );
  dialogReference.afterClosed().subscribe((res)=>{
    if(res == 'add'){
      this.notificationsService.successToaster('Package edited', 'Success'); 
      this.getPackages();
    }
  });
}
  
    
    // );
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

}

// openDeleteDialog() {
//   const dialogInterface: DialogInterface = {
//     dialogHeader: 'Confirmation Message',
//     dialogContent: 'Are you sure you want to delete this?',
//     cancelButtonLabel: 'No',
//     confirmButtonLabel: 'Yes',
//     callbackMethod: () => {
     
//     },
//   };
//   this.dialog.open(SharedComponent, {
//     width: '300px',
//     data: dialogInterface,
//   });
// }

