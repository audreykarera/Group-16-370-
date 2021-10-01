import { BookingService } from './../../../../../../shared/services/booking.service';
import { ServiceService } from './../../../../../../shared/services/service.service';
import { EmployeeDateTimeSlot,Booking,Service, Employee, BookingServices } from 'src/app/Interfaces/Index'

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeedatetimeslotService } from 'src/app/shared/services/employeedatetimeslot.service';
import { BookingserviceService } from 'src/app/shared/services/bookingservice.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-create-bookingservice',
  templateUrl: './create-bookingservice.component.html',
  styleUrls: ['./create-bookingservice.component.scss']
})
export class CreateBookingserviceComponent implements OnInit {
form:FormGroup;
bridge: BookingServices;

employeeList: Employee[]; 
employee: Employee;

bookingList: Booking[];
booking: Booking;

serviceList: Service[];
service: Service;

employeeDateTimeSlotList: EmployeeDateTimeSlot[];
employeeDateTimeSlot: EmployeeDateTimeSlot;

  constructor(
    private bridgeBookingService: BookingserviceService,
    private bookingService: BookingService,
    
    private serviceService:ServiceService,
    private serviceEmployeeDateTimeSlot: EmployeedatetimeslotService,
    private serviceEmployee: EmployeeService,

    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateBookingserviceComponent>, 
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) { }

  ngOnInit(): void {
  }

  readEmployees(){
    this.serviceEmployee.getEmployees().subscribe((res)=>{
      this.employeeList = res as Employee[]; 
    });
  }

  readBooking(){
    this.bookingService.getBookings().subscribe((res)=>{
      this.bookingList = res as Booking[];
    });
  }
  readService(){
    this.serviceService.getServices().subscribe((res)=>{
      this.serviceList = res as Service[];
    });
  }

  readEmployeeDateTmeSlot(){
    this.serviceEmployeeDateTimeSlot.getEmployeeDateTimeSlots().subscribe((res)=>{
      this.employeeDateTimeSlotList = res as EmployeeDateTimeSlot[];
    })
  }

  OnSubmit(){
    if(this.form.valid){
      this.bridge = this.form.value; 
      console.log(this.form.value);
      this.bridgeBookingService.CreateBookingService(this.bridge).subscribe(res =>{
        this.dialogRef.close('add');
      });
    }
  }  
}
