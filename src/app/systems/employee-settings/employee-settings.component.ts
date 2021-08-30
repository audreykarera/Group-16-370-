import { ViewEmploymentStatusesComponent } from './view-employment-statuses/view-employment-statuses.component';
import { ViewEmployeeTypeComponent } from './view-employee-type/view-employee-type.component';
import { ViewEmployeeTitleComponent } from './view-employee-title/view-employee-title.component';

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-settings',
  templateUrl: './employee-settings.component.html',
  styleUrls: ['./employee-settings.component.scss']
})
export class EmployeeSettingsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
zz
  routerViewEmployeeTitles() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      ViewEmployeeTitleComponent,
      dialogConfig
    );
  }
  routerViewEmployeeTypes() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      ViewEmployeeTypeComponent,
      dialogConfig
    );
  }
  routerViewEmploymentStatuses() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      ViewEmploymentStatusesComponent,
      dialogConfig
    );
  }
  
}
