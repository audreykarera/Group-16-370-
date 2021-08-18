import { EditPackagesComponent } from './../../edit-packages/edit-packages/edit-packages.component';
import { CreatePackageComponent } from './../../create-packages/create-package/create-package.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-packages',
  templateUrl: './read-packages.component.html',
  styleUrls: ['./read-packages.component.scss']
})
export class ReadPackagesComponent implements OnInit {
  constructor(
    public router: Router,
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
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
}
