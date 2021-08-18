import { AddEmployeeTypeComponent } from './../add-employee-type/add-employee-type.component';
import { DeleteEmployeeTypeComponent } from './../delete-employee-type/delete-employee-type.component';
import { EditEmployeeTypeComponent } from './../edit-employee-type/edit-employee-type.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-view-employee-type',
  templateUrl: './view-employee-type.component.html',
  styleUrls: ['./view-employee-type.component.scss']
})
export class ViewEmployeeTypeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  routerEditEmployeeTypes() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      EditEmployeeTypeComponent,
      dialogConfig
    );
  }
  routerDeleteEmployeeTypes() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      DeleteEmployeeTypeComponent,
      dialogConfig
    );
  }
  routerAddEmployeeTypes() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
     AddEmployeeTypeComponent,
      dialogConfig
    );
  }
}
