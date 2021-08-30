import { ServiceType } from 'src/app/models/serviceType';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';

@Component({
  selector: 'app-edit-servicetype',
  templateUrl: './edit-servicetype.component.html',
  styleUrls: ['./edit-servicetype.component.scss']
})
export class EditServicetypeComponent implements OnInit {

  serviceTypeList: ServiceType[];

  constructor(public dialog: MatDialog,
    private serviceTypeService:ServiceTypeService) { }
  
  ngOnInit(): void {
    this.readServiceTypes();
  }

  readServiceTypes(){
    this.serviceTypeService.getServiceTypes().subscribe((res)=>{
      this.serviceTypeList=res as ServiceType[];
    })
  }
  openConfirmDialog() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Confirmation Message',
      dialogContent: 'Are you sure you want to save changes made?',
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
      dialogContent: 'Are you sure you want cancel changes made ?',
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
