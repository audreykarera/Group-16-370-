import { EmploymentStatusService } from './../../../shared/services/employment-status.service';
import { AddEmploymentStatusComponent } from './../add-employment-status/add-employment-status/add-employment-status.component';
import { EmploymentStatus } from './../../../models/employmentStatus';
import { EditEmploymentStatusesComponent } from './../edit-employment-statuses/edit-employment-statuses.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { getDefaultEventEnd } from '@fullcalendar/angular';

@Component({
  selector: 'app-view-employment-statuses',
  templateUrl: './view-employment-statuses.component.html',
  styleUrls: ['./view-employment-statuses.component.scss']
})
export class ViewEmploymentStatusesComponent implements OnInit {
  
  employmentStatusList: EmploymentStatus[]; 
  employmentStatus: EmploymentStatus; 


  constructor(
    public employmentStatusService: EmploymentStatusService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.readEmploymentStatuses();
  }
  
  readEmploymentStatuses(){
    console.log(this.employmentStatusList);
    this.employmentStatusService.getEmploymentStatuses().subscribe((res)=>{
      this.employmentStatusList = res as EmploymentStatus[];
      console.log(this.employmentStatusList);
    });
  }
    onDelete(id){
      this.employmentStatusService.deleteEmploymentStatus(id).subscribe((res)=>{
        console.log(id);
        this.readEmploymentStatuses();
      });
    }

  routerEditEmploymentStatuses() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      EditEmploymentStatusesComponent,
      dialogConfig
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
