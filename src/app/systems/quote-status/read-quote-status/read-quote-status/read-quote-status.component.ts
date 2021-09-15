import { CreateQuoteStatusComponent } from './../../create-quote-status/create-quote-status/create-quote-status.component';
import { QuoteStatus } from './../../../../models/quotestatus';
import { QuoteStatusService } from './../../../../shared/services/quote-status.service';
import { EditQuoteStatusComponent } from './../../edit-quote-status/edit-quote-status/edit-quote-status.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatTableDataSource } from '@angular/material/table';

export interface QuoteStatusTable {
  id: number;
  quoteStatus: string;
}

const ELEMENT_DATA: QuoteStatusTable[] = [
  {id: 1, quoteStatus: 'Sent'},
  {id: 2, quoteStatus: 'Not Sent'}

];

@Component({
  selector: 'app-read-quote-status',
  templateUrl: './read-quote-status.component.html',
  styleUrls: ['./read-quote-status.component.scss']
})
export class ReadQuoteStatusComponent implements OnInit {

  displayedColumns: string[] = ['id', 'quoteStatus', 'edit', 'delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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

    openAddDialog(){
      this.dialog.open(CreateQuoteStatusComponent,{height:'auto',width:'auto'});
    }

    openEditDialog(){
      this.dialog.open(EditQuoteStatusComponent,{height:'auto',width:'auto'});
    }

  routerAddQuoteStatus() {
    const dialog = new MatDialogConfig
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'}
    const dialogReference = this.dialog.open(
      CreateQuoteStatusComponent,
      dialog
    )
   }
  routerEditQuoteStatus() {
    const dialog = new MatDialogConfig
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'}
    const dialogReference = this.dialog.open(
      EditQuoteStatusComponent,
      dialog
    )
   }


}
