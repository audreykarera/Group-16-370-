import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuoteStatus } from 'src/app/models/quotestatus';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { QuoteStatusService } from 'src/app/shared/services/quote-status.service';

@Component({
  selector: 'app-create-quote-status',
  templateUrl: './create-quote-status.component.html',
  styleUrls: ['./create-quote-status.component.scss']
})
export class CreateQuoteStatusComponent implements OnInit {

  quoteStatus: QuoteStatus;
  quoteStatusList: QuoteStatus[];

  constructor(
    private quoteStatusService: QuoteStatusService, 
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.refreshForm()
  }

  Close(){
    this.dialog.closeAll();
  }
  onSave(){
    this.quoteStatusService.postQuoteStatus(this.quoteStatus).subscribe((res)=>{
      this.quoteStatus = res as QuoteStatus; 
    });
    this.Close();
    this.notificationsService.successToaster("New Quote Status added", "Success");
    setTimeout(()=>{
      window.location.reload();
    }, 1000);
  }

  refreshForm(){
    this.quoteStatus = {
      QouteStatusId: 0,
      QuoteStatusName: ''
    }
  }
}

