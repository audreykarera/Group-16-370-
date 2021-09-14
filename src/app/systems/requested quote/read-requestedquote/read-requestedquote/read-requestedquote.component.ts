import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource1 = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }



  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
   openViewDialog(){
    this.dialog.open(ViewSentQuoteComponent);
  }
 

}
