import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ViewClientsComponent } from '../view-clients/view-clients/view-clients.component';

export interface ClientsTable {
  companyname: string;
  clientname: string;
  cellnumber: string;
  email: string;
} 

const ELEMENT_DATA: ClientsTable[] = [
  {companyname: 'Coco-Cola', clientname: 'Micheal Scott', cellnumber: '0834472143', email: 'michealscott@cocacola.com' },
];

@Component({
  selector: 'app-read-clients',
  templateUrl: './read-clients.component.html',
  styleUrls: ['./read-clients.component.scss']
})
export class ReadClientsComponent implements OnInit {

  displayedColumns: string[] = ['companyname', 'clientname', 'cellnumber', 'email', 'view',];
  dataSource = new MatTableDataSource (ELEMENT_DATA);
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
 
  }
  routerViewClient() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      ViewClientsComponent, 
      dialogConfig
    );
  }

}
