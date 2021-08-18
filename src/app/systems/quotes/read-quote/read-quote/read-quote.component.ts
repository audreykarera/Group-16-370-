import { CreateQuoteComponent } from './../../create-quote/create-quote/create-quote.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-quote',
  templateUrl: './read-quote.component.html',
  styleUrls: ['./read-quote.component.scss']
})
export class ReadQuoteComponent implements OnInit {

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
