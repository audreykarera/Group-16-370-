import { NotificationsService } from './../../../../shared/services/notifications.service';
import { LocationService } from './../../../../shared/services/location.service';
import { ServiceType } from './../../../../models/serviceType';
import { ServicePriceService } from './../../../../shared/services/service-price.service';
import { ServiceTypeService } from './../../../../shared/services/service-type.service';
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
 
  serviceList: Service;
  serviceTypeList: ServiceType[];
  servicePriceList: ServicePrice[];
  locationList: Location[];
  searchText = '';
  

  constructor(
    public router: Router,
    public dialog: MatDialog,
    private serviceService: ServiceService,
    private serviceServiceType: ServiceTypeService,
    private serviceServicePrice: ServicePriceService,
    private locationService:LocationService,
    private notificationService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.readService();
  }

  readService(){
    this.serviceService.getServices().subscribe((res)=>{
      this.serviceList =res as Service;
    },(err: HttpErrorResponse)=>{
      this.notificationService.failToaster("Unable to display service types", "Error");
      console.log(err);
    })
  }

  readServiceType(){
    this.serviceServiceType.getServiceTypes().subscribe((res)=>{
      this.serviceTypeList=res as ServiceType[];
    })
  }
  
  deleteService(id){
    this.serviceServiceType.deleteServiceType(id).subscribe((res)=>{
      console.log(id);
      this.readService();
    }, (err: HttpErrorResponse)=>{
      this.notificationService.failToaster("Unable to delete service type", "Error");
    });
  }

    editService(obj){
      this.serviceService.patchService(obj).subscribe((res)=>{
        this.readService();
      })
    }
  routerAddSerice() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateServiceComponent,
      dialogConfig
    );
  }

  routerEditService(serviceId:number,serviceName:string,serviceDescription:string,serviceType:ServiceType[],location:Location[],servicePrice:ServicePrice[]) {
    console.log(serviceId,serviceName,serviceDescription,serviceType,location,servicePrice)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditServiceComponent,
     {
       disableClose:false,
       data:{
         serviceId,
         serviceName,
         serviceDescription,
         serviceType,
         location,
         servicePrice
       }
     }
    );

  }
}
