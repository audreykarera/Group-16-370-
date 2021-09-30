import { NotificationsService } from './../../../../shared/services/notifications.service';
import { LocationService } from './../../../../shared/services/location.service';
import { ServiceService } from './../../../../shared/services/service.service';
import { ServicePriceService } from './../../../../shared/services/service-price.service';
import { ServiceTypeService } from './../../../../shared/services/service-type.service';
import { Observable } from 'rxjs';
import { EditServiceComponent } from './../../edit-service/edit-service/edit-service.component';
import { CreateServiceComponent } from './../../create-service/create-service/create-service.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';

import { HttpErrorResponse } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Service, ServicePrice, ServiceType } from 'src/app/Interfaces/Index';


@Component({
  selector: 'app-read-services',
  templateUrl: './read-services.component.html',
  styleUrls: ['./read-services.component.scss']
})
export class ReadServicesComponent implements OnInit {
 serviceList: Service[] = [];
  services$: Observable<Service[]> = this.service.getServices();
  serviceTable: Service

 // displayedColumns: string[] = ['servicename', 'servicedescription','servicetypeid','servicepriceid','locationid', 'edit', 'delete'];
  displayedColumns: string[] = ['servicename', 'servicedescription','servicetypeid','servicepriceid', 'edit', 'delete'];
  dataSource = new MatTableDataSource (this.serviceList);
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
    private service: ServiceService, 
    private notificationsService: NotificationsService,) { }

    ngOnInit(): void {
      this.GetServices();
      this.refreshForm();
    }

    refreshForm() {
      this.serviceTable = {
        ServiceId: 0,
        ServiceName: '',
        ServiceDescription:'',
        ServiceTypeId:0,
        ServicePriceId:0,
        // LocationId:0
      }
    }

    Close() {
      this.dialog.closeAll();
    }

    GetServices(){
      this.services$.subscribe(res=>{
        if(res){
          this.serviceList = res; 
          console.log(res);
        }
      });
    }

    DeleteService(id){
      console.log(id);
      this.service.DeleteService(id).subscribe((res)=>{
          this.notificationsService.successToaster('Service Deleted', 'Success'); 
          this.GetServices();
      });
      
    }

    routerAddServices() {
      const dialog = new MatDialogConfig();
      dialog.disableClose = true;
      dialog.width = 'auto';
     dialog.height = 'auto';
     dialog.data = {add: 'yes'};
      const dialogReference = this.dialog.open(
        CreateServiceComponent,
        dialog
      );
      dialogReference.afterClosed().subscribe((res)=>{
       if(res == 'add'){
         this.notificationsService.successToaster('Service Price Added', 'Success'); 
         this.GetServices();
       }
     });
    }

    routerEditService(serviceId:number, serviceName:string, serviceDescription:string, serviceTypeId:number, servicePriceId:number){
      const dialog=new MatDialogConfig();
      dialog.disableClose=true;
      dialog.width='auto';
      dialog.height='auto';
        dialog.data={add:'yes'}
      const dialogReference=this.dialog.open(
        EditServiceComponent,
        {
          data:{serviceId:serviceId, serviceName:serviceName, serviceDescription:serviceDescription, serviceTypeId:serviceTypeId, servicePriceId:servicePriceId}
        }
        );
        dialogReference.afterClosed().subscribe((res)=>{
          if (res == 'add'){
            this.notificationsService.successToaster('Service Edited', 'Success');
            this.GetServices();
          }
        });
      }    
    
  }