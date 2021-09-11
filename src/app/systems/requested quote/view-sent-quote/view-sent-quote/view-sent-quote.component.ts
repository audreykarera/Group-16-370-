import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-sent-quote',
  templateUrl: './view-sent-quote.component.html',
  styleUrls: ['./view-sent-quote.component.scss']
})
export class ViewSentQuoteComponent implements OnInit {
  dialog: any;

  constructor() { }

  ngOnInit(): void {
  }
  Close(){
    this.dialog.closeAll();
  }

}
