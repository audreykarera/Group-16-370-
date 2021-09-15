import { NotificationsService } from './../../../../shared/services/notifications.service';
import { DialogInterface } from './../../../../Interfaces/dialog.interface';
import { EditServicetypeComponent } from './../../edit-servicetype/edit-servicetype/edit-servicetype.component';
import { CreateServicetypeComponent } from './../../create-servicetypes/create-servicetype/create-servicetype.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';
import { ServiceType } from 'src/app/models/serviceType';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface ServiceTypesTable {
  servicetypename: string;
  servicetypedescription: string;
} 

const ELEMENT_DATA: ServiceTypesTable[] = [
  {servicetypedescription: 'any type of plastic', servicetypename: 'Plastic'},
];


@Component({
  selector: 'app-read-servicetype',
  templateUrl: './read-servicetype.component.html',
  styleUrls: ['./read-servicetype.component.scss']
})
export class ReadServicetypeComponent implements OnInit {

  // servicetypes: ServiceType;
  // serviceTypeList: ServiceType[];
  // searchText = '';

  displayedColumns: string[] = ['servicetypename', 'servicetypedescription', 'edit', 'delete'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public router: Router,
    public dialog: MatDialog,
    private serviceTypeService: ServiceTypeService,
    private notificationService:NotificationsService
  ) { }


  ngOnInit(): void {
    //this.readServiceTypes();
  }

  // readServiceTypes(){
  //   this.serviceTypeService.getServiceTypes().subscribe((res)=>{
  //     this.serviceTypeList =res as ServiceType[];
  //   },(err: HttpErrorResponse)=>{
  //     this.notificationService.failToaster("Unable to display service types", "Error");
  //     console.log(err);
  //   })
  // }

  // onDelete(id){
  //   this.serviceTypeService.deleteServiceType(id).subscribe((res)=>{
  //     console.log(id);
  //     this.readServiceTypes();
  //   }, (err: HttpErrorResponse)=>{
  //     this.notificationService.failToaster("Unable to delete service type", "Error");
  //     setTimeout(()=>{
  //       window.location.reload();
  //     },10000);  
  //   });
  // }
   
  // editServiceTypes(obj){
  //  this.serviceTypeService.patchServiceType(obj).subscribe((res)=>{
  //    this.readServiceTypes();
  //  })
  // }
  
  routerAddServiceType() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width ='20rem';
    dialog.height = 'auto';
    const dialogReference = this.dialog.open(
      CreateServicetypeComponent,
      dialog
    );
  }
    routerEditServiceType() {
      const dialog = new MatDialogConfig();
      dialog.disableClose = true;
      dialog.width ='20rem';
      dialog.height = 'auto';
      const dialogReference = this.dialog.open(
        EditServicetypeComponent,
        dialog
      );
  }

  
  // routerEditServiceType(serviceTypeId:number,serviceTypeName:string,serviceTypeDescription:string) {
  //   console.log(serviceTypeId,serviceTypeName,serviceTypeDescription);    
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   const dialogReference = this.dialog.open(
  //     EditServicetypeComponent,
  //     {
  //       disableClose:false, //if click on something else it will close
  //       data:{
  //         serviceTypeId, //used in order to call what needs to be edited
  //         serviceTypeName,
  //         serviceTypeDescription
  //       }
  //     }
  //   );
  }
