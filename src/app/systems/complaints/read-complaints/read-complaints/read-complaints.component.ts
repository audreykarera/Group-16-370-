import { ViewComplaintsComponent } from './../../view-complaints/view-complaints/view-complaints.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface ComplaintsTable {
  complaintid: number;
  clientname: string
  date: string;
} 

const ELEMENT_DATA: ComplaintsTable[] = [
  {complaintid: 9, clientname: 'Audrey Sir', date: '29 May 2021'}
];

@Component({
  selector: 'app-read-complaints',
  templateUrl: './read-complaints.component.html',
  styleUrls: ['./read-complaints.component.scss']
})
export class ReadComplaintsComponent implements OnInit {

  displayedColumns: string[] = ['complaintid', 'clientname', 'date', 'view'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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
