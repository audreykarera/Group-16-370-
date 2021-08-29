import { ServicePriceService } from './../../../../shared/services/service-price.service';
import { ServiceTypeService } from './../../../../shared/services/service-type.service';
import { ServiceType } from './../../../../Interfaces/dialog.interface';
import { Observable } from 'rxjs';
import { ServiceService } from './../../../../shared/services/service.service';
import { EditServiceComponent } from './../../edit-service/edit-service/edit-service.component';
import { CreateServiceComponent } from './../../create-service/create-service/create-service.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { Service } from 'src/app/models/service';
import { HttpErrorResponse } from '@angular/common/http';
import { ServicePrice } from 'src/app/models/servicePrice';

@Component({
  selector: 'app-read-services',
  templateUrl: './read-services.component.html',
  styleUrls: ['./read-services.component.scss']
})
export class ReadServicesComponent implements OnInit {
 
  serviceList: Service[];
  serviceTypeList: ServiceType[];
  servicePriceList: ServicePrice[];
  
  

  constructor(
    public router: Router,
    public dialog: MatDialog,
    private serviceService: ServiceService,
    private serviceServiceType: ServiceTypeService,
    private serviceServicePrice: ServicePriceService
  ) { }

  ngOnInit(): void {
    this.readService();
  }

  readService(){
    this.serviceService.getServices().subscribe((res)=>{
      this.serviceList =res as Service[];
    })
  }
  
  deleteService(id){
    this.serviceService.deleteService(id).subscribe((res)=>{
      console.log(id);
      this.readService();
    });
  }

  routerAddSerice() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateServiceComponent,
      dialogConfig
    );
  }

  routerEditService() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditServiceComponent,
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
