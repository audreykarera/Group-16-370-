import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-print-client-invoices',
  templateUrl: './print-client-invoices.component.html',
  styleUrls: ['./print-client-invoices.component.scss']
})
export class PrintClientInvoicesComponent implements OnInit {
  invoice: { InvoiceID: number};
  

  constructor( @Inject(MAT_DIALOG_DATA)
  public data:any,public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.data);
    this.refreshForm();
  }

  refreshForm(){
    this.invoice = {
      InvoiceID: 0,
    }
  }

  Close(){
    this.dialog.closeAll();
  }

}
