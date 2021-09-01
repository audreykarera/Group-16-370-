import { EmploymentStatusService } from './../../../shared/services/employment-status.service';
import { EmploymentStatus } from './../../../models/employmentstatus';

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-employment-statuses',
  templateUrl: './edit-employment-statuses.component.html',
  styleUrls: ['./edit-employment-statuses.component.scss']
})
export class EditEmploymentStatusesComponent implements OnInit {

  employmentStatus: EmploymentStatus;

  constructor(public dialog: MatDialog,
    private employmentStatusService: EmploymentStatusService,
    @Inject(MAT_DIALOG_DATA)
    public data: any) { }
  
  ngOnInit(): void {
    
    console.log(this.data);
  }

  readEmploymentStatus(){
    this.employmentStatusService.getEmploymentStatuses().subscribe((res)=>{
      this.employmentStatus=res as EmploymentStatus;
    })
  }

  updateEmploymentStatus(){
    this.employmentStatusService.patchEmploymentStatus(this.employmentStatus).subscribe((res)=>{
      this.employmentStatus=res as EmploymentStatus;
    })
  }
  }
