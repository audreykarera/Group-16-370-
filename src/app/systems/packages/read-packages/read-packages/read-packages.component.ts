
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { SharedComponent } from "src/app/component/shared components/shared/shared.component";
import { DialogInterface } from "src/app/Interfaces/dialog.interface";

import { CreatePackageComponent } from "../../create-packages/create-package/create-package.component";
import { EditPackagesComponent } from "../../edit-packages/edit-packages/edit-packages.component";

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
