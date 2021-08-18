import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../../create-employee/create-employee/create-employee.component';
import { ViewEmployeeComponent } from '../../view-employee/view-employee/view-employee.component';

@Component({
  selector: 'app-read-employees',
  templateUrl: './read-employees.component.html',
  styleUrls: ['./read-employees.component.scss']
})
export class ReadEmployeesComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  routerAddEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateEmployeeComponent, 
      dialogConfig
    );
  }

  routerViewEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      ViewEmployeeComponent, 
      dialogConfig
    );
  }

}
