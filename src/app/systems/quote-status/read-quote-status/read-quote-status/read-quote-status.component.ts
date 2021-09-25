import { CreateQuoteStatusComponent } from './../../create-quote-status/create-quote-status/create-quote-status.component';
import { QuoteStatusService } from './../../../../shared/services/quote-status.service';
import { EditQuoteStatusComponent } from './../../edit-quote-status/edit-quote-status/edit-quote-status.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { QuoteStatus } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-read-quote-status',
  templateUrl: './read-quote-status.component.html',
  styleUrls: ['./read-quote-status.component.scss']
})
export class ReadQuoteStatusComponent implements OnInit {

  quoteStatusList: QuoteStatus[] = [];
  quoteStatuses$: Observable<QuoteStatus[]> = this.quoteStatusService.getQuoteStatuses();
  quoteStatus: QuoteStatus;

  displayedColumns: string[] = ['quoteStatus', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.quoteStatusList);
 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(
    public quoteStatusService: QuoteStatusService,
    public dialog: MatDialog,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.GetQuoteStatuses();
     this.refreshForm();
   }
 
   refreshForm() {
     this.quoteStatus = {
       QuoteStatusId: 0,
       QuoteStatusName: ''
     }
   }
 
   routerAddQuoteStatus() {
     const dialog = new MatDialogConfig();
     dialog.disableClose = true;
     dialog.width = 'auto';
     dialog.height = 'auto';
     dialog.data = {add: 'yes'};
     const dialogReference = this.dialog.open(
       CreateQuoteStatusComponent,
       dialog
     );
 
     dialogReference.afterClosed().subscribe((res) => {
       if(res == 'add')
       this.notificationsService.successToaster('Quote Status  Added', 'Success');
       this.GetQuoteStatuses();
     });
   }
 
   routerEditQuoteStatus(quoteStatusId: number, quoteStatusName: string) {
     const dialog = new MatDialogConfig();
     dialog.disableClose = true;
     dialog.width = 'auto';
     dialog.height = 'auto';
     dialog.data = {add: 'yes'};
     const dialogReference = this.dialog.open(
       EditQuoteStatusComponent,
       {
         data: {quoteStatusId: quoteStatusId, quoteStatusName: quoteStatusName}
       }
     );
 
     dialogReference.afterClosed().subscribe((res) => {
       if(res == 'add'){
         this.notificationsService.successToaster('Quote Status Edited', 'Success');
         this.GetQuoteStatuses();
       }
     });
   }
 
   Close() {
     this.dialog.closeAll();
   }
 
   GetQuoteStatuses(){
     this.quoteStatuses$.subscribe(res =>{
       if(res){
         this.quoteStatusList = res;
         console.log(res);
       }
     });
   }
 
   DeleteQuoteStatus(id){
     console.log(id);
     this.quoteStatusService.DeleteQuoteStatus(id).subscribe((res) =>{
       this.notificationsService.successToaster('Quote Status Deleted', 'Success');
       this.GetQuoteStatuses();
     })
   }
 
 
 
 
 
 
 }
 