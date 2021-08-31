
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { Service } from 'src/app/models/service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})

export class EditServiceComponent implements OnInit {
  serviceList: Service;

  constructor(
    public dialog: MatDialog,
     private serviceService: ServiceService,
     @Inject(MAT_DIALOG_DATA)
     public data: any,
     private notificationService: NotificationsService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.readService();
  }

  Close(){
    this.dialog.closeAll();
  }

  updateService(){
    this.serviceService.patchService(this.serviceList).subscribe((res)=>{
      this.serviceList = res as Service;
    });
    this.Close();
    this.notificationService.successToaster("Successfully save Service","Error");
  }

  readService(){
    this.serviceService.getServices().subscribe((res)=>{
      this.serviceList =res as Service;
    })
  }

  refreshForm(){
    this.serviceList={
      ServiceId:0,
      ServiceName:'',
      ServiceDescription: '',
      ServiceType:[],
      ServicePrice:[],
      Location:[],
    }
  }
  
}
