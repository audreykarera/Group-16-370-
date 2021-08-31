import { ServiceTypeService } from 'src/app/shared/services/service-type.service';

import { ServiceService } from 'src/app/shared/services/service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { ServiceType } from 'src/app/models/serviceType';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {
  service:Service;
  serviceTypeList: ServiceType[];
  types$;

  //  services: service[] = [
  //   {value: 'complaints-0', viewValue: 'Collection'},
  //   {value: 'users-1', viewValue: 'Delivery'},
  //   {value: 'collection-2', viewValue: 'Removal'}, 
  // ];
  // formGroup!: FormGroup;
  constructor(
    public dialog: MatDialog,
    public serviceService:ServiceService,
    public serviceTypeService:ServiceTypeService){ }

  ngOnInit(): void {
    this.refreshForm();
    this.types$=this. readServiceTypes();
  }

 
  readServiceTypes(){
    this.serviceTypeService.getServiceTypes().subscribe((res)=>{
      this.serviceTypeList =res as ServiceType[];
    })
  }

  // onSave(){
  //   this.serviceService.postService(this.service).subscribe((res)=>{
  //     this.service= res as Service;
  //   })    
  // }
  
  refreshForm(){
    this.service={
      ServiceId:0,
      ServiceName: '',
      ServiceDescription:'',
      ServiceType:[],
      ServicePrice:[],
      Location:[],
    }
  }

  openConfirmDialog() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Confirmation Message',
      dialogContent: 'Are you sure you want to save this?',
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
      dialogContent: 'Are you sure you want cancel this ?',
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
