import { BookingService } from './../../../../../../shared/services/booking.service';
import { ServiceService } from './../../../../../../shared/services/service.service';
import { EmployeeDateTimeSlot, Booking, Service, Employee, BookingServices, Client, BookingStatus, CollectionNote, PaymentType, ServiceType } from 'src/app/Interfaces/Index'

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeedatetimeslotService } from 'src/app/shared/services/employeedatetimeslot.service';
import { BookingserviceService } from 'src/app/shared/services/bookingservice.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ClientService } from 'src/app/shared/services/client.service';
import { CollectionNoteService } from 'src/app/shared/services/collection-note.service';
import { BookingStatusService } from 'src/app/shared/services/booking-status.service';
import { PaymentTypeService } from 'src/app/shared/services/payment-type.service';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';

@Component({
  selector: 'app-create-bookingservice',
  templateUrl: './create-bookingservice.component.html',
  styleUrls: ['./create-bookingservice.component.scss']
})
export class CreateBookingserviceComponent implements OnInit {
  form: FormGroup;
  bridge: BookingServices;

  clientList: Client[] = [];
  client: Client;

  bookingList: Booking[];
  booking: Booking;

  serviceList: Service[];
  service: Service;

  serviceTypeList: ServiceType[] = [];
  serviceType: ServiceType;

  services: Service[] = [];

  bookingStatusList: BookingStatus[] = [];
  bookingStatus: BookingStatus;

  collectionNoteList: CollectionNote[] = [];
  collectionNote: CollectionNote;

  paymentTypeList: PaymentType[] = [];
  paymentType: PaymentType;

  error_messages = {
    clientId: [
      { type: 'required', message: 'Client is required' }
    ],
    BookingStatusId: [
      { type: 'required', message: 'Booking Status is required' }
    ],
    CollectionNoteId: [
      { type: 'required', message: 'Collection Note is required' }
    ],
    PaymentTypeId: [
      { type: 'required', message: 'Payment Type is required' }
    ]
    //UnitId:[
    //   { type: 'required', message: 'Unit is required' }
    // ]

  }

  constructor(
    private serviceBookingServices: BookingserviceService,
    private serviceService: ServiceService,
    private serviceTypeService: ServiceTypeService,
    private serviceBooking: BookingService,
    private serviceClient: ClientService,
    private serviceBookingStatus: BookingStatusService,
    private serviceCollectionNote: CollectionNoteService,
    private servicePaymentType: PaymentTypeService,

    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateBookingserviceComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) { }

  ngOnInit(): void {
    this.readClients();
    this.readBookingStatus();
    this.readCollectionNote();
    this.readPaymentType();
    this.readServices();
    this.readServiceTypes();
    console.log(this.serviceList, "this is serviceList");

    this.finalForm();
  }

  dropDown(serviceTypeName){
    console.log("This is serviceTypeName", serviceTypeName)
    this.services=[];
    this.serviceList.forEach(y=>{
      if(y.serviceTypeName==serviceTypeName){
        this.services.push(y)
        console.log("This is service",y)
      }   
    })       
  }

  finalForm() {
    this.form = this.formBuilder.group({
      BookingId: [this.data.bookingId],
      ServiceId: [''],
      ClientId: [''],
      BookingStatusId: [''],
      PaymentTypeId: [''],
      CollectionNoteId: [''],
      ServiceTypeId:['']

    });
  }

  addServiceList: Service[] = [];

  CheckBox(ser: Service) {
    this.addServiceList.indexOf(ser) === -1 ? this.addServiceList.push(ser) : this.ClearCheckBox(this.addServiceList.indexOf(ser));
  }

  ClearCheckBox(serviceId: number) {
    this.addServiceList.splice(serviceId, 1);
  }
  readClients() {
    this.serviceClient.getClients().subscribe((res) => {
      this.clientList = res as Client[];
    });
  }

  readBookingStatus() {
    this.serviceBookingStatus.getBookingStatuses().subscribe((res) => {
      this.bookingStatusList = res as BookingStatus[];
    });
  }

  readCollectionNote() {
    this.serviceCollectionNote.getCollectionNotes().subscribe((res) => {
      this.collectionNoteList = res as CollectionNote[];
    });
  }

  readPaymentType() {
    this.servicePaymentType.getPaymentTypes().subscribe((res) => {
      this.paymentTypeList = res as PaymentType[];
    })
  }

  readServices() {
    this.serviceService.getServices().subscribe((res) => {
      this.serviceList = res as Service[];
    });
  }

  readServiceTypes() {
    this.serviceTypeService.getServiceTypes().subscribe((res) => {
      this.serviceTypeList = res as ServiceType[];
      console.log("this is serviceList", res);
    });
  }


  OnSubmit() {
    if (this.form.valid) {
      this.bridge = this.form.value;
      console.log(this.form.value);
      this.serviceBookingServices.CreateBookingService(this.bridge).subscribe(res => {
        this.dialogRef.close('add');
      });
    }
  }
}
