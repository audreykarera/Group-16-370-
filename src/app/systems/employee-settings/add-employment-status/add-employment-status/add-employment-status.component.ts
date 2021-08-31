import { NotificationsService } from './../../../../shared/services/notifications.service';
import { EmploymentStatusService } from './../../../../shared/services/employment-status.service';
import { EmploymentStatus } from './../../../../models/employmentstatus';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employment-status',
  templateUrl: './add-employment-status.component.html',
  styleUrls: ['./add-employment-status.component.scss']
})
export class AddEmploymentStatusComponent implements OnInit {

  employmentStatuses: EmploymentStatus

  constructor(
    private employmentStatusService: EmploymentStatusService, 
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.refreshForm()
  }

  Close(){
    this.dialog.closeAll();
  }

  onSave(){
    this.employmentStatusService.postEmploymentStatus(this.employmentStatuses).subscribe((res)=>{
      this.employmentStatuses = res as EmploymentStatus; 
    });
    this.Close();
    this.notificationsService.successToaster("New Employment Status added", "Success");
    setTimeout(()=>{
      window.location.reload();
    }, 1000);
  }

  refreshForm(){
    this.employmentStatuses = {
      EmploymentStatusId: 0,
      EmploymentStatusName: ''
   
    }

}}

