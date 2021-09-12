import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  employee: Employee;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data:any,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.refreshForm();
  }

  refreshForm(){
    this.employee = {
      EmployeeId: 0,
      EmployeeFirstName: '',
    }
  }

  Close(){
    this.dialog.closeAll();
  }

}
