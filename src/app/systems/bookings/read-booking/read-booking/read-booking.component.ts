import { BookingServiceService } from './../../../../shared/services/booking-service.service';
import { ViewBookingsComponent } from './../../view-bookings/view-bookings.component';
import { BookingService } from './../../../../shared/services/booking.service';
import { Booking } from './../../../../Interfaces/Index';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CalendarOptions } from '@fullcalendar/angular';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-read-booking',
  templateUrl: './read-booking.component.html',
  styleUrls: ['./read-booking.component.scss']
})
export class ReadBookingComponent implements OnInit {

  bookingList: Booking[] = [];
  bookings$: Observable<Booking[]> = this.bookingService.getBookings();
  bookingTable: Booking
  bookingServiceList: BookingService[]=[];
  //bookingServices$:Observable<BookingService[]>=this.bookingServiceService.getBookingServices();
  bookingServiceTable: BookingService;

  displayedColumns: string[] = ['id', 'client name', 'client surname','client email address', 'view'];
  dataSource = new MatTableDataSource (this.bookingList);

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialog: MatDialog,
    private bookingService: BookingService, 
    //private bookingServiceService :BookingServiceService
    private notificationsService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.GetBookings();
    this.refreshForm();
  }
  routerViewBooking(clientFirstName: string, clientSurname: string, clientEmailAddress: string, bookingId: number, bookingStatusName: string, collectionDate: string, collectionTime: string, paymentTypeName: string ) {
    const dialog = new MatDialogConfig
    dialog.disableClose = true;
    dialog.width = '2rem';
    dialog.height = 'autp';
    dialog.data = {add: 'yes'}
    const dialogReference = this.dialog.open(
      ViewBookingsComponent,
      {
        data: { clientFirstName: clientFirstName, clientSurname: clientSurname, clientEmailAddress: clientEmailAddress, bookingId: bookingId, bookingStatusName: bookingStatusName, collectionDate: collectionDate,  collectionTime: collectionTime, paymentTypeName: paymentTypeName  }
      });

    }



  refreshForm() {
    this.bookingTable = {
      BookingId: 0,
      ClientId: 0,
      BookingStatusId: 0,
      PaymentTypeId: 0,
      CollectionNoteId: 0,
     
    }
  }

  Close() {
    this.dialog.closeAll();
  }

  GetBookings(){
    this.bookings$.subscribe(res=>{
      if(res){
        this.bookingList = res; 
        console.log(res);
      }
    });
  }
  
    // GetBookingServices(){
    //   this.bookingServices$.subscribe(res=>{
    //     if(res){
    //       this.bookingList = res; 
    //       console.log(res);
    //     }
    //   });
    // }
  
  // DeleteService(id){
  //   console.log(id);
  //   this.service.DeleteService(id).subscribe((res)=>{
  //       this.notificationsService.successToaster('Service Deleted', 'Success'); 
  //       this.GetServices();
  //   });
    
  // }

//   routerAddBooking() {
//     const dialog = new MatDialogConfig();
//     dialog.disableClose = true;
//     dialog.width = 'auto';
//    dialog.height = 'auto';
//    dialog.data = {add: 'yes'};
//     const dialogReference = this.dialog.open(
//       CreateServiceComponent,
//       dialog
//     );
//     dialogReference.afterClosed().subscribe((res)=>{
//      if(res == 'add'){
//        this.notificationsService.successToaster('Service Price Added', 'Success'); 
//        this.GetServices();
//      }
//    });
//   }
// }

  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth',
  //   weekends: false,
  //   dateClick: this.handleDateClick.bind(this), // bind is important!
  //   events: [
  //     { title: 'Skip booking', date: '2021-08-05' },
  //     { title: 'event 2', date: '2019-04-02' }
  //   ]
  // };

  // handleDateClick(arg: { dateStr: string; }) {
  //   alert('date click! ' + arg.dateStr)
  // }
}
