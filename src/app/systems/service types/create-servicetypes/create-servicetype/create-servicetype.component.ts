import { ServiceType } from './../../../../models/serviceType';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';

@Component({
  selector: 'app-create-servicetype',
  templateUrl: './create-servicetype.component.html',
  styleUrls: ['./create-servicetype.component.scss']
})
export class CreateServicetypeComponent implements OnInit {
  serviceType: ServiceType;
  apiUrl="http://localhost:60000/api/servicetype/";

  constructor(private serviceTypeService:ServiceTypeService,
    public dialog: MatDialog) { }
  
      ngOnInit(): void {
        this.refreshForm();
      }
   
      
      onSave(){
        this.serviceTypeService.postServiceType(this.serviceType).subscribe((res)=>{
          this.serviceType = res as ServiceType;
        })
      }
    
      refreshForm(){
        this.serviceType = {
          ServiceTypeId: 0,
          ServiceTypeName: '',
          ServiceTypeDescription:''
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
