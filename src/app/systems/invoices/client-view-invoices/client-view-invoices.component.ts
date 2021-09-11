import { PrintClientInvoicesComponent } from './../print-client-invoices/print-client-invoices/print-client-invoices.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

export interface ClientViewInvoices {
  id: number;
  servicename: string;
  date: string;
}
const ELEMENT_DATA: ClientViewInvoices[] = [
  {id: 1, servicename: 'Collection & disposal', date: '2021-08-09'	},
];

@Component({
  selector: 'app-client-view-invoices',
  templateUrl: './client-view-invoices.component.html',
  styleUrls: ['./client-view-invoices.component.scss']
})
export class ClientViewInvoicesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'servicename', 'date', 'print'];
  dataSource = ELEMENT_DATA;
  dataSource1 = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  routerPrintClientInvoice() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      PrintClientInvoicesComponent,
      dialogConfig
    );
  }
}
