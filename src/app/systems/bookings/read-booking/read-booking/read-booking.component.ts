import { CreateBookingComponent } from './../../create-booking/create-booking/create-booking.component';
import { id } from '@swimlane/ngx-charts';
import { element } from 'protractor';
import { ViewBookingsComponent } from './../../view-bookings/view-bookings.component';
import { BookingService } from './../../../../shared/services/booking.service';
import { Booking } from './../../../../Interfaces/Index';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CalendarOptions } from '@fullcalendar/angular';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import  * as XLSX from 'xlsx';

@Component({
  selector: 'app-read-booking',
  templateUrl: './read-booking.component.html',
  styleUrls: ['./read-booking.component.scss']
})
export class ReadBookingComponent implements OnInit {
  fileName ='export-data.xlsx';
  bookingList: Booking[] = [];
  bookings$: Observable<Booking[]> = this.bookingService.getBookings();
  bookingTable: Booking

  bookingServiceList: BookingService[]=[];
  //bookingServices$:Observable<BookingService[]>=this.bookingServiceService.getBookingServices();
  bookingServiceTable: BookingService;

  displayedColumns: string[] = ['id', 'client name', 'client surname','client email address', 'collectionote', 'view', 'excel'];
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

  routerViewBooking(clientFirstName: string, clientSurname: string, clientEmailAddress: string, bookingStatusName: string, bookingId: number, collectionDate: string, collectionTime: string, paymentTypeName: string  ) {
    const dialog = new MatDialogConfig
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'}
    const dialogReference = this.dialog.open(
      ViewBookingsComponent,
      {
        data: { clientFirstName: clientFirstName, clientSurname: clientSurname, clientEmailAddress: clientEmailAddress, bookingStatusName: bookingStatusName, bookingId: bookingId, collectionDate: collectionDate, collectionTime: collectionTime, paymentTypeName: paymentTypeName }
      });

    }
   
    exportExcel():void {
     
        let element = document.getElementById('excel-table');
        const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
  
        const wb:XLSX.WorkBook=XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
        
        XLSX.writeFile(wb,this.fileName)
       
    }
    

  refreshForm() {
    this.bookingTable = {
      bookingId: 0,
      clientId: 0,
      bookingStatusId: 0,
      paymentTypeId: 0,
      collectionNoteId: 0,

      bookingService:[],
      serviceId:0
     
    }
  }

  Close() {
    this.dialog.closeAll();
  }

  GetBookings(){
    this.bookings$.subscribe(res=>{
      if(res){
        this.bookingList = res; 
        console.log(this.bookingList);
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

  routerAddBooking() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
   dialog.height = 'auto';
   dialog.data = {add: 'yes'};
    const dialogReference = this.dialog.open(
      CreateBookingComponent,
      dialog
    );
    dialogReference.afterClosed().subscribe((res)=>{
     if(res == 'add'){
       this.notificationsService.successToaster('Service Price Added', 'Success'); 
       this.GetBookings();
     }
   });
  }
}



