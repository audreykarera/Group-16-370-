import { EditEmploymentStatusComponent } from './../edit-employment-status/edit-employment-status/edit-employment-status.component';
import { EmploymentStatusService } from './../../../shared/services/employment-status.service';
import { AddEmploymentStatusComponent } from './../add-employment-status/add-employment-status/add-employment-status.component';
import { EmploymentStatus } from './../../../models/employmentStatus';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

export interface EmploymentStatusTable {
  employementstatusname: string;
  employementstatusid: number;
} 

const ELEMENT_DATA: EmploymentStatusTable[] = [
  {employementstatusid: 1, employementstatusname: 'Retrenched'},
  
];

@Component({
  selector: 'app-view-employment-statuses',
  templateUrl: './view-employment-statuses.component.html',
  styleUrls: ['./view-employment-statuses.component.scss']
})
export class ViewEmploymentStatusesComponent implements OnInit {
  
  // employmentStatusList: EmploymentStatus[]; 
  // employmentStatus: EmploymentStatus; 

  
  displayedColumns: string[] = ['employementstatusid', 'employementstatusname', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;


  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    //this.readEmploymentStatuses();
  }

  Close(){
    this.dialog.closeAll();
  }
  
  // readEmploymentStatuses(){
  //   console.log(this.employmentStatusList);
  //   this.employmentStatusService.getEmploymentStatuses().subscribe((res)=>{
  //     this.employmentStatusList = res as EmploymentStatus[];
  //     console.log(this.employmentStatusList);
  //   });
  // }
    // onDelete(id){
    //   this.employmentStatusService.deleteEmploymentStatus(id).subscribe((res)=>{
    //     console.log(id);
    //     this.readEmploymentStatuses();
    //   });this.Close();
    //   this.notificationsService.successToaster("Employment Status deleted", "Success");
    //   setTimeout(()=>{
    //     window.location.reload();
    //   }, 1000);
    //   }
    
  routerEditEmploymentStatuses(employmentStatusId: number, employmentStatusName: string) {
    console.log(employmentStatusId, employmentStatusName);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      EditEmploymentStatusComponent,
      {
        disableClose: true,
        data: {
          employmentStatusId, 
          employmentStatusName
        }
      }
     
    );

    }
    routerAddEmploymentStatuses() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false; 
      const dialogReference = this.dialog.open(
        AddEmploymentStatusComponent,
        dialogConfig
      );
      }
}
