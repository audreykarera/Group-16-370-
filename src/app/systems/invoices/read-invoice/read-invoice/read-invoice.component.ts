import { CreateInvoiceComponent } from './../../create-invoice/create-invoice/create-invoice.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface PeriodicElement {
  serviceId: number;
  clientname: string
  date: string;
} 

const ELEMENT_DATA: PeriodicElement[] = [
  {serviceId: 9, clientname: 'Audrey Sir', date: '29 May 2021'}
];

@Component({
  selector: 'app-read-invoice',
  templateUrl: './read-invoice.component.html',
  styleUrls: ['./read-invoice.component.scss']
})
export class ReadInvoiceComponent implements OnInit {

  displayedColumns: string[] = ['serviceId', 'clientname', 'date', 'generate', 'send invoice'];
  dataSource = ELEMENT_DATA;

  constructor(
    public router: Router,
    public dialog: MatDialog
  ) { }
  

  ngOnInit(): void {
  }
  routerGenerateInvoice() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateInvoiceComponent, 
      dialogConfig
    );

}
}
