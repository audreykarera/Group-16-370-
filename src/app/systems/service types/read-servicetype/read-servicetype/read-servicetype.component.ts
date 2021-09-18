import { NotificationsService } from './../../../../shared/services/notifications.service';
import { DialogInterface } from './../../../../Interfaces/dialog.interface';
import { EditServicetypeComponent } from './../../edit-servicetype/edit-servicetype/edit-servicetype.component';
import { CreateServicetypeComponent } from './../../create-servicetypes/create-servicetype/create-servicetype.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';

import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { ServiceType } from 'src/app/Interfaces/Index';

// export interface ServiceTypesTable {
//   servicetypename: string;
//   servicetypedescription: string;
// } 

// const ELEMENT_DATA: ServiceTypesTable[] = [
//   {servicetypedescription: 'any type of plastic', servicetypename: 'Plastic'},
// ];


@Component({
  selector: 'app-read-servicetype',
  templateUrl: './read-servicetype.component.html',
  styleUrls: ['./read-servicetype.component.scss']
})
export class ReadServicetypeComponent implements OnInit {

  serviceTypeList: ServiceType[] = [];
  serviceTypes$: Observable<ServiceType[]> = this.service.getServiceTypes();
  serviceType: ServiceType

  displayedColumns: string[] = ['servicetypename', 'servicetypedescription', 'edit', 'delete'];
  dataSource = new MatTableDataSource (this.serviceTypeList);
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
    private service: ServiceTypeService, 
    private notificationsService: NotificationsService,) { }


    ngOnInit(): void {
      this.GetServiceTypes();
      this.refreshForm();
    }

    refreshForm() {
      this.serviceType = {
        ServiceTypeId: 0,
        ServiceTypeName: '',
        ServiceTypeDescription:''
      }
    }

    Close() {
      this.dialog.closeAll();
    }

    GetServiceTypes(){
      this.serviceTypes$.subscribe(res=>{
        if(res){
          this.serviceTypeList = res; 
          console.log(res);
        }
      });
    }

    DeleteServiceType(id){
      console.log(id);
      this.service.DeleteServiceType(id).subscribe((res)=>{
          this.notificationsService.successToaster('Service Type Deleted', 'Success'); 
          this.GetServiceTypes();
      });
      
    }

    routerEditServiceTypes(serviceTypeId:number, serviceTypeName:string, serviceTypeDescription:string){
      const dialog=new MatDialogConfig();
      dialog.disableClose=true;
      dialog.width='auto';
      dialog.height='auto';
        dialog.data={add:'yes'}
      const dialogReference=this.dialog.open(
        EditServicetypeComponent,
        {
          data:{serviceTypeId:serviceTypeId, serviceTypeName:serviceTypeName, serviceTypeDescription:serviceTypeDescription}
        }
        );
        dialogReference.afterClosed().subscribe((res)=>{
          if (res == 'add'){
            this.notificationsService.successToaster('Service Type Edited', 'Success');
            this.GetServiceTypes();
          }
        });
      }    
    
  
    
  routerAddServiceTypes(){
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto',
    dialog.data = { add: 'yes' }
    const dialogReference = this.dialog.open(
      CreateServicetypeComponent,
      dialog
    ); 

    

  dialogReference.afterClosed().subscribe((res)=>{
    if(res == 'add'){
      this.notificationsService.successToaster('Service Type Added', 'Success'); 
      this.GetServiceTypes();
    }
  });
  
  }
}
