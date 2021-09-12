import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-sent-quote',
  templateUrl: './view-sent-quote.component.html',
  styleUrls: ['./view-sent-quote.component.scss']
})
export class ViewSentQuoteComponent implements OnInit {
  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  Close(){
    this.dialog.closeAll();
  }

}
