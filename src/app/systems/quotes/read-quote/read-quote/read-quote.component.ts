import { CreateQuoteComponent } from './../../create-quote/create-quote/create-quote.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface QuotesTable {
  serviceid: number;
  servicename: string;
  servicetype: string;
  date: string;
} 

const ELEMENT_DATA: QuotesTable[] = [
  {serviceid: 1, servicename: 'Removal', servicetype: 'Rubbish', date: '09/11/2021'},
];

@Component({
  selector: 'app-read-quote',
  templateUrl: './read-quote.component.html',
  styleUrls: ['./read-quote.component.scss']
})
export class ReadQuoteComponent implements OnInit {

  displayedColumns: string[] = ['serviceid', 'servicename', 'servicetype', 'date', 'generate', 'send'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  routerGenerateQuote() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; //This must be set to true when the close button works
    const dialogReference = this.dialog.open(
      CreateQuoteComponent,
      dialogConfig
    );
  }

}
