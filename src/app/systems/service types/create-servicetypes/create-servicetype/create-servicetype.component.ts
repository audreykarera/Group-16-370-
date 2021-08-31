import { Router } from '@angular/router';
import { ServiceType } from './../../../../models/serviceType';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-create-servicetype',
  templateUrl: './create-servicetype.component.html',
  styleUrls: ['./create-servicetype.component.scss']
})
export class CreateServicetypeComponent implements OnInit {
  serviceType: ServiceType;

  constructor(
    private serviceTypeService:ServiceTypeService,
    private notificationService: NotificationsService,
    public dialog: MatDialog,
    public router:Router) { }
  
      ngOnInit(): void {
        this.refreshForm();
      }

      Close(){
        this.dialog.closeAll();
      }
        
      onSave(){
        this.serviceTypeService.postServiceType(this.serviceType).subscribe((res)=>{
          this.serviceType = res as ServiceType;
        });
        this.Close();
        this.notificationService.successToaster("Successfully saved service type","Success Message");
        setTimeout(()=>{
          window.location.reload();
        }, 1000);
      }
    
      refreshForm(){
        this.serviceType = {
          ServiceTypeId: 0,
          ServiceTypeName: '',
          ServiceTypeDescription:''
        }
      }
}
