import { EmploymentStatusService } from './../../../../shared/services/employment-status.service';
import { EmploymentStatus } from './../../../../models/employmentstatus';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employment-status',
  templateUrl: './add-employment-status.component.html',
  styleUrls: ['./add-employment-status.component.scss']
})
export class AddEmploymentStatusComponent implements OnInit {

  employmentStatuses: EmploymentStatus

  constructor(
    private employmentStatusService: EmploymentStatusService
  ) { }

  ngOnInit(): void {
    this.refreshForm()
  }

  onSave(){
    this.employmentStatusService.postEmploymentStatus(this.employmentStatuses).subscribe((res)=>{
      this.employmentStatuses = res as EmploymentStatus; 
    })
  }

  refreshForm(){
    this.employmentStatuses = {
      EmploymentStatusId: 0,
      EmploymentStatusName: ''
   
    }

}}

