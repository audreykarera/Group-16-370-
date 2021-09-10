import { ViewComplaintsComponent } from './../../view-complaints/view-complaints/view-complaints.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  complaintid: number;
  clientname: string
  date: string;
} 

const ELEMENT_DATA: PeriodicElement[] = [
  {complaintid: 9, clientname: 'Audrey Sir', date: '29 May 2021'}
];

@Component({
  selector: 'app-read-complaints',
  templateUrl: './read-complaints.component.html',
  styleUrls: ['./read-complaints.component.scss']
})
export class ReadComplaintsComponent implements OnInit {

  displayedColumns: string[] = ['complaintid', 'clientname', 'date', 'view'];
  dataSource = ELEMENT_DATA;

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
