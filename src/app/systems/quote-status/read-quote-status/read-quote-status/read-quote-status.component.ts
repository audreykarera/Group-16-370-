import { CreateQuoteStatusComponent } from './../../create-quote-status/create-quote-status/create-quote-status.component';
import { QuoteStatus } from './../../../../models/quotestatus';
import { QuoteStatusService } from './../../../../shared/services/quote-status.service';
import { EditQuoteStatusComponent } from './../../edit-quote-status/edit-quote-status/edit-quote-status.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-read-quote-status',
  templateUrl: './read-quote-status.component.html',
  styleUrls: ['./read-quote-status.component.scss']
})
export class ReadQuoteStatusComponent implements OnInit {

  quoteStatusList: QuoteStatus[]; 
  quoteStatus: QuoteStatus; 


  constructor(
    public quoteStatusService: QuoteStatusService,
    public dialog: MatDialog,
    notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.readQuoteStatuses();
  }
  Close(){
    this.dialog.closeAll();
  }
  
  
  readQuoteStatuses(){
    console.log(this.quoteStatus);
    this.quoteStatusService.getQuoteStatuses().subscribe((res)=>{
      this.quoteStatusList = res as QuoteStatus[];
      console.log(this.quoteStatusList);
    });
  }
    onDelete(id){
      this.quoteStatusService.deleteQuoteStatus(id).subscribe((res)=>{
        console.log(id);
        this.readQuoteStatuses();
      });
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
