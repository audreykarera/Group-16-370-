import { AddEmploymentStatusComponent } from './../add-employment-status/add-employment-status.component';
import { DeleteEmploymentStatusesComponent } from './../delete-employment-statuses/delete-employment-statuses.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-employment-statuses',
  templateUrl: './edit-employment-statuses.component.html',
  styleUrls: ['./edit-employment-statuses.component.scss']
})
export class EditEmploymentStatusesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  routerEditEmploymentStatuses() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      EditEmploymentStatusesComponent,
      dialogConfig
    );
  }
  routerDeleteEmploymentStatuses() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      DeleteEmploymentStatusesComponent,
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
