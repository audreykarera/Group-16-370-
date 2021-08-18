import { Component, OnInit } from '@angular/core';

interface report {
  value: string;
  viewValue: string;
}

interface location {
  value: string;
  viewValue: string;
}

interface services {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.scss']
})
export class GenerateReportComponent implements OnInit {

  reports: report[] = [
    {value: 'Complaint', viewValue: 'Complaints'},
    {value: 'User', viewValue: 'Users'},
    {value: 'Collection', viewValue: 'Collections'}, 
    {value: 'Booking', viewValue: 'Bookings'},
    {value: 'Revenue', viewValue: 'Revenue'},
  ];

  location: location[]=[
    {value: 'Location', viewValue: 'Location'},
  ]; 

  services: services[]=[
    {value: 'Services', viewValue: 'Services'},
    {value: 'ServiceType', viewValue: 'Service Type'},
  ]; 

  isSelected: boolean=false; 
  Booking: Boolean | undefined;
  Revenue: Boolean | undefined;
  
  get(data: { value: string; }){
    this.isSelected = true; 
    if(data.value == 'Booking'){
      this.Booking = true;
      this.Revenue = false; 
    } else if (data.value == 'Revenue'){
      this.Revenue = true;
      this.Booking = false;
    } else if(data.value =='Complaint'){
      this.isSelected = false;
      this.Revenue = false;
      this.Booking = false;
    } else if(data.value == 'User'){
      this.isSelected = false;
      this.Revenue = false;
      this.Booking = false;
    } else if(data.value =='Collection'){
      this.isSelected = false;
      this.Revenue = false;
      this.Booking = false;
    }
    else{
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
  

}
