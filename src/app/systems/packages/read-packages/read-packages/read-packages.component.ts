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

  displayedColumns: string[] = ['packagename', 'packagedetails','packagerateid', 'serviceid','edit', 'delete'];
  dataSource = new MatTableDataSource (this.packageList);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(event);
  }
  constructor(
    public dialog: MatDialog,
    private service: PackageService,
    private notificationsService: NotificationsService,) { }


  ngOnInit(): void {
    this.getPackages();
    this.refreshForm();
  }
  refreshForm() {
    this.package = {
      PackageId: 0,
      PackagePrice: 0,
      PackageName: ' ',
      PackageDetails: ' ',
      PackageRateId: 0,
      ServiceId: 0

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


  routerEditPackage(packageId: number, packageName: string, packageDetails: string,  packageRateId: number, serviceId: number) {
  const dialog= new MatDialogConfig();
  dialog.disableClose = true;
  dialog.width = 'auto';
  dialog.height = 'auto';
  dialog.data = {add: 'yes'};
  const dialogReference = this.dialog.open(
    EditPackagesComponent,
    {
      data: {packageId:packageId, packageName:packageName,packageDetails:packageDetails,packageRateId:packageRateId,  serviceId: serviceId}
    }
  );
  dialogReference.afterClosed().subscribe((res)=>{
    if(res == 'add'){
      this.notificationsService.successToaster('Package edited', 'Success');
      this.getPackages();
    }
  });
}

}

