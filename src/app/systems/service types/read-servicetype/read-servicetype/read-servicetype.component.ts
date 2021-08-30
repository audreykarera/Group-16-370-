import { ServiceTypeService } from 'src/app/shared/services/service-type.service';
import { DialogInterface } from './../../../../Interfaces/dialog.interface';
import { EditServicetypeComponent } from './../../edit-servicetype/edit-servicetype/edit-servicetype.component';
import { CreateServicetypeComponent } from './../../create-servicetypes/create-servicetype/create-servicetype.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceType } from 'src/app/models/serviceType';

@Component({
  selector: 'app-read-servicetype',
  templateUrl: './read-servicetype.component.html',
  styleUrls: ['./read-servicetype.component.scss']
})
export class ReadServicetypeComponent implements OnInit {

  serviceTypeList: ServiceType[];
  serviceType:ServiceType;
  
  
  constructor(
    public router: Router,
    public dialog: MatDialog,
    private serviceServiceType: ServiceTypeService,
  ) { }

  ngOnInit(): void {
  this.readServiceTypes();
  }

  readServiceTypes(){
    this.serviceServiceType.getServiceTypes().subscribe((res)=>{
      this.serviceTypeList =res as ServiceType[];
    })
  }
  
  deleteServiceType(id){
    this.serviceServiceType.deleteServiceType(id).subscribe((res)=>{
      console.log(id);
      this.readServiceTypes();
    });
    
  }

  routerAddServiceType() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateServicetypeComponent, 
      dialogConfig
    );
  }

  routerEditServiceType(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditServicetypeComponent, 
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