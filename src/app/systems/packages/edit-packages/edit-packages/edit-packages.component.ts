import { PackageService } from '../../../../shared/services/package.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { Package } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-edit-packages',
  templateUrl: './edit-packages.component.html',
  styleUrls: ['./edit-packages.component.scss']
})
export class EditPackagesComponent implements OnInit {

  packageList: Package[];

  constructor(
    public dialog: MatDialog,
     private packageService: PackageService) { }

  ngOnInit(): void {
    this.readPackage();
  }
  Close(){
    this.dialog.closeAll();
  }

  readPackage(){
    this.packageService.getPackages().subscribe((res)=>{
      this.packageList =res as Package[];
    })
  }
  openConfirmDialog() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Confirmation Message',
      dialogContent: 'Are you sure you want to save changes made?',
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
  
  /**
     * This method invokes the Cancel Dialog
     */
  openCancelDialog() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Confirmation Message',
      dialogContent: 'Are you sure you want cancel changes made ?',
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