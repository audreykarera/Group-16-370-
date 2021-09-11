import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-client-invoices',
  templateUrl: './print-client-invoices.component.html',
  styleUrls: ['./print-client-invoices.component.scss']
})
export class PrintClientInvoicesComponent implements OnInit {
  dialog: any;

  constructor() { }

  ngOnInit(): void {
  }
  Close(){
    this.dialog.closeAll();
  }

}
