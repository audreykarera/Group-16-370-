import { BookingserviceService } from 'src/app/shared/services/bookingservice.service';
import { Observable } from 'rxjs';
import { BookingServices } from 'src/app/Interfaces/Index';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bookingservice',
  templateUrl: './bookingservice.component.html',
  styleUrls: ['./bookingservice.component.scss']
})
export class BookingserviceComponent implements OnInit {
  bookingServiceList: BookingServices[]=[];
  bookingServices$: Observable<BookingServices[]>=this.service.getBookingServices();

  dataSource = new MatTableDataSource(this.bookingServiceList);
  displayedColumns: string[] = ['client','email', 'bookingStatus', 'collectionNote', 'paymentTypeName', 'serviceTypeName','serviceName','delete'];

  constructor(
    public dialog: MatDialog,
    private service: BookingserviceService,
    private notificationsService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.GetBookingServices();
  }
  
  GetBookingServices(){
    this.bookingServices$.subscribe(res=>{
      if(res){
        this.bookingServiceList=res;
        console.log(res);
      }
    });
  }
}
