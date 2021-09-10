
import { Component, OnInit } from '@angular/core';

export interface EmployeeBookingsTable {
  id: number;
  employee: string;
  service: string;
  serviceType: string;
  date: string;
  time: string;
}

const ELEMENT_DATA: EmployeeBookingsTable[] = [
  {id: 1, employee: 'Manesha Govender', service: 'Collection and Removal', serviceType: 'Tyres', date: '2021/09/08', time: '08:00-10:00'}
];

@Component({
  selector: 'app-employee-side-bookings',
  templateUrl: './employee-side-bookings.component.html',
  styleUrls: ['./employee-side-bookings.component.scss']
})
export class EmployeeSideBookingsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'employee', 'service', 'serviceType', 'date', 'time'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

