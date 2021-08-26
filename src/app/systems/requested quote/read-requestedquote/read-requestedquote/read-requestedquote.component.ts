import { ViewSentQuoteComponent } from './../../view-sent-quote/view-sent-quote/view-sent-quote.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-requestedquote',
  templateUrl: './read-requestedquote.component.html',
  styleUrls: ['./read-requestedquote.component.scss']
})
export class ReadRequestedquoteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  routerViewQuote() {
   const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(ViewSentQuoteComponent,dialogConfig);
  }

}
