import { ServiceTypeService } from './../../../service types/service type service/service-type.service';

import { DialogInterface, ServiceType } from './../../../../Interfaces/dialog.interface';
import { EditServicetypeComponent } from './../../edit-servicetype/edit-servicetype/edit-servicetype.component';
import { CreateServicetypeComponent } from './../../create-servicetypes/create-servicetype/create-servicetype.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-read-servicetype',
  templateUrl: './read-servicetype.component.html',
  styleUrls: ['./read-servicetype.component.scss']
})
export class ReadServicetypeComponent implements OnInit {

  ServiceType: ServiceType[] = [];
  observeServiceType: Observable<ServiceType[]> = this.service.getServiceType();
  
  constructor(private service: ServiceTypeService,
    public router: Router,
    public dialog: MatDialog,
    public serviceServiceType: ServiceTypeService,
  ) { }


  ngOnInit(): void {
  this.readServiceType();
  }
  readServiceType(){
    this.observeServiceType.subscribe(data=>{
      this.ServiceType=data;
      console.log(this.ServiceType);
    }, (err:HttpErrorResponse)=>{
      console.log(err);
    })
  }

  routerAddServiceType() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateServicetypeComponent, 
      dialogConfig
    );
  }

  routerEditServiceType() {
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