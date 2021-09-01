import { CreateQuoteStatusComponent } from './../../create-quote-status/create-quote-status/create-quote-status.component';
import { CreateQuoteComponent } from './../../../quotes/create-quote/create-quote/create-quote.component';
import { EditQuoteStatusComponent } from './../../edit-quote-status/edit-quote-status/edit-quote-status.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-read-quote-status',
  templateUrl: './read-quote-status.component.html',
  styleUrls: ['./read-quote-status.component.scss']
})
export class ReadQuoteStatusComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  routerAddQuoteStatus() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateQuoteStatusComponent, 
      dialogConfig
    );
  }
  routerEditQuoteStatus() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditQuoteStatusComponent, 
      dialogConfig
    );

}
}
