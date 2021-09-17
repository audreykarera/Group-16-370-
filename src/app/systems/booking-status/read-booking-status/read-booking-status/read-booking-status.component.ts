import { EditBookingStatusComponent } from './../../edit-booking-status/edit-booking-status/edit-booking-status.component';
import { CreateBookingStatusComponent } from './../../create-booking-status/create-booking-status/create-booking-status.component';
import { BookingStatusService } from './../../../../shared/services/booking-status.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { BookingStatus } from 'src/app/Interfaces/Index';


@Component({
  selector: 'app-read-booking-status',
  templateUrl: './read-booking-status.component.html',
  styleUrls: ['./read-booking-status.component.scss']
})
export class ReadBookingStatusComponent implements OnInit {

  bookingstatuslist: BookingStatus[] = [];
  bookingstatuses$: Observable<BookingStatus[]> = this.service.getBookingStatuses();
  bookingstatus: BookingStatus

  displayedColumns: string[] = ['bookingstatusname','edit','delete'];
  dataSource = new MatTableDataSource(this.bookingstatuslist);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(public dialog: MatDialog,
    private service: BookingStatusService, 
    private notificationsService: NotificationsService,) { }

  ngOnInit(): void {
    this.GetBookingStatuses();
    this.refreshForm();
  }
  refreshForm() {
    this.bookingstatus = {
      BookingStatusId: 0,
      BookingStatusName: ''
    }
  }

  Close() {
    this.dialog.closeAll();
  }

  GetBookingStatuses(){
    this.bookingstatuses$.subscribe(res=>{
      if(res){
        this.bookingstatuslist = res; 
        console.log(res);
      }
    });
  }

  DeleteBookingStatus(id){
    console.log(id);
    this.service.DeleteBookingStatus(id).subscribe((res)=>{
        this.notificationsService.successToaster('Title Deleted', 'Success'); 
        this.GetBookingStatuses();
    });
  }

   routerAddBookingStatus() {
    const dialog = new MatDialogConfig
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'}
    const dialogReference = this.dialog.open(
      CreateBookingStatusComponent,
      dialog
    );
   
   dialogReference.afterClosed().subscribe((res)=>{
    if(res == 'add'){
      this.notificationsService.successToaster('Booking Status Added', 'Success'); 
      this.GetBookingStatuses();
    }
  });
}
  //  routerEditBookingStatus() {
  //   const dialog = new MatDialogConfig
  //   dialog.disableClose = true;
  //   dialog.width = 'auto';
  //   dialog.height = 'auto';
  //   dialog.data = {add: 'yes'}
  //   const dialogReference = this.dialog.open(
  //     EditBookingStatusComponent,
  //     dialog
  //   )
  //  }


}

