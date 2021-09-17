import { NotificationsService } from './../../../../shared/services/notifications.service';
import { Router } from '@angular/router';
import { Service } from './../../../../models/service';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';

import { ServiceService } from 'src/app/shared/services/service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { ServiceType } from 'src/app/Interfaces/Index';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  service:Service;
  serviceTypeList: ServiceType[];
  
  constructor(private _service:ServiceService,
    private notificationService:NotificationsService,
    public dialog: MatDialog,
    public serviceService:ServiceService,
    public serviceTypeService:ServiceTypeService,
    public router: Router){ }

  ngOnInit(): void {
    this.refreshForm();
    
  }
  
  Close(){
    this.dialog.closeAll();
  }

  onSave(){
    this.serviceService.postService(this.service).subscribe((res)=>{
      this.service = res as Service;
    });
    this.Close();
    this.notificationService.successToaster("Successfully save Service","Error");
  }

 
  readServiceTypes(){
    this.serviceTypeService.getServiceTypes().subscribe((res)=>{
      this.serviceTypeList =res as ServiceType[];
    })
  }
 
  refreshForm(){
    this.service={
      ServiceId:0,
      ServiceName: '',
      ServiceDescription:'',
      
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
