import { ServiceType } from 'src/app/models/serviceType';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';

@Component({
  selector: 'app-edit-servicetype',
  templateUrl: './edit-servicetype.component.html',
  styleUrls: ['./edit-servicetype.component.scss']
})
export class EditServicetypeComponent implements OnInit {

 serviceType:ServiceType;

  constructor(public dialog: MatDialog,
    private serviceTypeService:ServiceTypeService,
    @Inject(MAT_DIALOG_DATA)
    public data: any) { }
  
  ngOnInit(): void {
    
    console.log(this.data);
  }

  readServiceTypes(){
    this.serviceTypeService.getServiceTypes().subscribe((res)=>{
      this.serviceType=res as ServiceType;
    })
  }

  updateServiceTypes(){
    this.serviceTypeService.patchServiceType(this.serviceType).subscribe((res)=>{
      this.serviceType=res as ServiceType;
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
