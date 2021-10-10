import { ServiceTypeService } from './../../../../shared/services/service-type.service';
import { PaymentTypeService } from './../../../../shared/services/payment-type.service';
import { CollectionNoteService } from './../../../../shared/services/collection-note.service';
import { BookingStatusService } from './../../../../shared/services/booking-status.service';
import { ClientService } from './../../../../shared/services/client.service';
import { CollectionNote, ServiceType } from 'src/app/Interfaces/Index';
import { BookingService } from 'src/app/shared/services/booking.service';
import { ServiceService } from './../../../../shared/services/service.service';
import { Service, Booking, BookingStatus, Client, PaymentType, BookingServices } from './../../../../Interfaces/Index';
import { BookingserviceService } from 'src/app/shared/services/bookingservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
  form: FormGroup;

  bookingServices: BookingserviceService;

  serviceList: Service[] = [];
  service: Service;

  serviceTypeList: ServiceType[]=[];
  serviceType:ServiceType;

  services:Service[]=[];

  bookingList: Booking[] = [];
  booking: Booking;

  clientList: Client[] = [];
  client: Client;

  bookingStatusList: BookingStatus[] = [];
  bookingStatus: BookingStatus;

  collectionNoteList: CollectionNote[] = [];
  collectionNote: CollectionNote;

  paymentTypeList: PaymentType[] = [];
  paymentType: PaymentType;

  //unitList:Unit[]=[];
  //unit:Unit;



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
    private serviceTypeService:ServiceTypeService,
    private serviceBooking: BookingService,
    private serviceClient: ClientService,
    private serviceBookingStatus: BookingStatusService,
    private serviceCollectionNote: CollectionNoteService,
    private servicePaymentType: PaymentTypeService,
    //private serviceUnit: UnitService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateBookingComponent>
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
    this.readClients();
    this.readBookingStatus();
    this.readCollectionNote();
    this.readPaymentType();
    this.readServices();
    this.readServiceTypes();
    console.log(this.serviceList, "this is serviceList");
    
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

  createForm(): void {
    this.form = this.formBuilder.group({
      clientId: ['', [Validators.required]],
      bookingStatusId: ['', [Validators.required]],
      collectionNoteId: ['', [Validators.required]],
      paymentTypeId: ['', [Validators.required]],
      serviceId: ['', [Validators.required]],
      serviceTypeId: ['', [Validators.required]]
    });
  }
  
  Close() {
    this.dialog.closeAll();
  }

  refreshForm() {
    this.booking = {
      bookingId: 0,
      clientId: 0,
      bookingStatusId: 0,
      collectionNoteId: 0,
      paymentTypeId: 0,
      serviceId: 0,
      bookingService: [],
    }
  }

  OnSubmit() {
    if (this.form.valid) {
      const Booking: Booking = this.form.value;      
      Booking.bookingService = this.form.controls['serviceId'].value;      
      console.log(Booking, "Booking");      
      this.serviceBooking.CreateBooking(Booking).subscribe(res => {
        console.log(res, "this is res");
        for (let x = 0; x < Booking.bookingService.length; x++) {
          let BookingServices: BookingServices = { bookingId: res.bookingId, serviceId:Number(Booking.bookingService[x]) }
          console.log(BookingServices,"BookingServices")
          this.serviceBookingServices.CreateBookingService(BookingServices).subscribe(tes => {
          })
        }
        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
    console.log(this.form.value)
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
      console.log("this is serviceList",res);
    });
  }

    
    readServiceTypes() {
      this.serviceTypeService.getServiceTypes().subscribe((res) => {
        this.serviceTypeList = res as ServiceType[];
        console.log("this is serviceList",res);
      });
    }
    

}

