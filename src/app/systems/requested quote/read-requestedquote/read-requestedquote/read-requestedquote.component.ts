import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewSentQuoteComponent } from '../../view-sent-quote/view-sent-quote/view-sent-quote.component';

export interface ClientViewInvoices {
  id: number;
  servicename: string;
  service: string;
  date: string;
}
const ELEMENT_DATA: ClientViewInvoices[] = [
  {id: 1, servicename: 'Removal', service: 'Oil', date: '2021/08/14'},
];

@Component({
  selector: 'app-read-requestedquote',
  templateUrl: './read-requestedquote.component.html',
  styleUrls: ['./read-requestedquote.component.scss']
})
export class ReadRequestedquoteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'servicename', 'service', 'date', 'view'];
  dataSource = ELEMENT_DATA;



  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  routerViewQuote() {
    const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = false;
     const dialogReference = this.dialog.open(ViewSentQuoteComponent,dialogConfig);
   }
 

}
