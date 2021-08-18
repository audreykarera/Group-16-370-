import { ViewComplaintsComponent } from './../../view-complaints/view-complaints/view-complaints.component';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-complaints',
  templateUrl: './read-complaints.component.html',
  styleUrls: ['./read-complaints.component.scss']
})
export class ReadComplaintsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  routerViewComplaint(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      ViewComplaintsComponent,
      dialogConfig
    );
  }

}
