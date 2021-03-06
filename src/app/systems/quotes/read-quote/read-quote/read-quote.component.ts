import { ViewQuoteComponent } from './../../view-quote/view-quote/view-quote.component';
import { QuoteLineService } from './../../../../shared/services/quote-line.service';
import { RequestedQuoteService } from './../../../../shared/services/requested-quote.service';
import { ServicePriceService } from './../../../../shared/services/service-price.service';
import { QuoteLine, Service, RequestedQuote } from './../../../../Interfaces/Index';
import { NotificationsService } from './../../../../shared/services/notifications.service';
import { QuoteService } from './../../../../shared/services/quote.service';
import { Observable } from 'rxjs';
import { CreateQuoteComponent } from './../../create-quote/create-quote/create-quote.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Quote, ServicePrice } from 'src/app/Interfaces/Index';


@Component({
  selector: 'app-read-quote',
  templateUrl: './read-quote.component.html',
  styleUrls: ['./read-quote.component.scss']
})
export class ReadQuoteComponent implements OnInit {

  //For Requested Quotes Table
  // requestedquoteList: RequestedQuote[] = [];
  // requestedquotes$: Observable<RequestedQuote[]> = this.serviceRequestedQuotes.getRequestedQuotes();
  // requestedQuote: RequestedQuote;

  //For QuoteLine Table
   quoteLineList: QuoteLine[] = [];
   quoteLines$: Observable<QuoteLine[]> = this.qouteLineService.getQuoteLines();
   quoteLine: QuoteLine;

  //For Quote Table
  //  quoteList: Quote[] = [];
  //  quotes$: Observable<Quote[]> = this.service.getQuotes();
  //  quote: Quote;

  displayedColumns: string[] = ['QuoteLineId', 'IssuedDate', 'Service', 'ServiceType', 'email', 'View'];
  dataSource = new MatTableDataSource(this.quoteLineList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialog: MatDialog,
    private service: QuoteService,
    private qouteLineService: QuoteLineService,
    private serviceRequestedQuotes: RequestedQuoteService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    //this.GetQuotes();
    //this.GetRequestedQuotes();
    this.GetQuoteLines();
    this.refreshForm();
  }

  refreshForm() {
    this.quoteLine = {
      quoteLineId: 0,
      serviceId: 0,
      quoteId:0,

    }
  }


  //For Requested Quote Table
  // GetRequestedQuotes() {
  //   this.requestedquotes$.subscribe(res => {
  //     if (res) {
  //       this.requestedquoteList = res;
  //       console.log(res);
  //     }
  //   })
  // }

   GetQuoteLines(){
     this.quoteLines$.subscribe(res => {
       if (res) {
         this.quoteLineList = res;
         console.log(res);
       }
     })
   }

  //For Quote Table
  //  GetQuotes() {
  //    this.quotes$.subscribe(res => {
  //     if (res) {
  //        this.quoteList = res;
  //        console.log(res);
  //      }
  //    });
  //  }


  routerGenerateQuote() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto',
      dialog.data = { add: 'yes' }
    const dialogReference = this.dialog.open(
      CreateQuoteComponent,
      dialog
    );

    dialogReference.afterClosed().subscribe((res) => {
      if (res == 'add') {
        this.notificationsService.successToaster('Quote Generated', 'Success');
        this.GetQuoteLines();
      }
    });
  }

  routerViewQuote() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = '500px',
    dialog.height = 'auto',
    dialog.data = { add: 'yes' }
    const dialogReference = this.dialog.open(
      ViewQuoteComponent,
      dialog
    )
  }

}
