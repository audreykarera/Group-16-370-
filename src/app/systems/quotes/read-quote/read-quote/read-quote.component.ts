import { QuoteLine, Service } from './../../../../Interfaces/Index';
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

  //For QuoteLine Table
  // quoteLineList: QuoteLine[] = [];
  // quoteLines$: Observable<QuoteLine[]> = this.service.getQuoteLines();
  // quoteLine: QuoteLine;


  servicePriceList: ServicePrice[] = [];
  servicePrice$: Observable<ServicePrice[]> = this.service.getQuoteServicePrice();
  servicePrice: ServicePrice;
  //For Quote Table
   quoteList: Quote[] = [];
   quotes$: Observable<Quote[]> = this.service.getQuotes();
   quote: Quote;

  displayedColumns: string[] = ['quoteid', 'empFirstName', 'quoteDescription','serviceName','servicePrice', 'date', 'generate', 'send'];
  dataSource = new MatTableDataSource (this.quoteList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialog: MatDialog,
    private service: QuoteService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.GetQuotes();
    this.GetServicePrices();
    this.refreshForm();
  }

  refreshForm(){
    this.quote = {
      QuoteId: 0,
      IssuedDate: '',
      QuoteDescription: '',
      EmployeeFirstName: '',
      EmployeeSurname: '',
      EmployeeMiddleName: '',
      EmployeeEmailAddress: '',
      QuoteStatusName: '',
      CompanyName: '',
      ClientEmailAddress: '',
    }
  }

  //For QuoteLineTable
  // GetQuoteLines() {
  //   this.quoteLines$.subscribe(res => {
  //     if(res) {
  //       this.quoteLineList = res;
  //       console.log(res);
  //     }
  //   });
  // }

  //For Quote Table
   GetQuotes(){
     this.quotes$.subscribe(res => {
       if(res) {
         this.quoteList = res;
         console.log(res);
       }
     });
   }

   GetServicePrices(){
    this.servicePrice$.subscribe(res => {
      if(res) {
        this.servicePriceList = res;
        console.log(res);
      }
    });
  }

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

    dialogReference.afterClosed().subscribe((res) =>{
      if(res == 'add') {
        this.notificationsService.successToaster('Quote Generated', 'Success');
        this.GetQuotes(); //For QuoteLine Table
      }
    });
  }

}
