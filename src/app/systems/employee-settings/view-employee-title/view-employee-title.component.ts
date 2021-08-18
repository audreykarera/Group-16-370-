import { AddEmployeeTitleComponent } from './../add-employee-title/add-employee-title.component';
import { DeleteEmployeeTitleComponent } from './../delete-employee-title/delete-employee-title.component';
import { EditEmployeeTitleComponent } from './../edit-employee-title/edit-employee-title.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-view-employee-title',
  templateUrl: './view-employee-title.component.html',
  styleUrls: ['./view-employee-title.component.scss']
})
export class ViewEmployeeTitleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  routerViewEmployeeTitles() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      ViewEmployeeTitleComponent,
      dialogConfig
    );
}
routerEditEmployeeTitles() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false; 
  const dialogReference = this.dialog.open(
    EditEmployeeTitleComponent,
    dialogConfig
  );
}
routerDeleteEmployeeTitles() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false; 
  const dialogReference = this.dialog.open(
    DeleteEmployeeTitleComponent,
    dialogConfig
  );
}
routerAddEmployeeTitles() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false; 
  const dialogReference = this.dialog.open(
    AddEmployeeTitleComponent,
    dialogConfig
  );
}
}
