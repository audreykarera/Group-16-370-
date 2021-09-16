import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  dialog: any;

  constructor() { }

  ngOnInit(): void {
  }
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);

}

Close(){
  this.dialog.closeAll();
}
}
