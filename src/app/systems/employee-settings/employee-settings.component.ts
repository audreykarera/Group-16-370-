import { ViewEmployeeTitleComponent } from './view-employee-title/view-employee-title.component';
import { ViewEmployeeTypeComponent } from './view-employee-type/view-employee-type.component';
import { ViewEmploymentStatusesComponent } from './view-employment-statuses/view-employment-statuses.component';
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

  routerViewEmploymentStatuses() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      ViewEmploymentStatusesComponent,
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
    routerViewEmployeeTitles() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false; 
      const dialogReference = this.dialog.open(
        ViewEmployeeTitleComponent,
        dialogConfig
      );
    }
}
