import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { RequestedQuote, RequestedQuoteLine, Service, ServiceType } from 'src/app/Interfaces/Index';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { RequestedQuoteLineService } from 'src/app/shared/services/requested-quote-line.service';
import { RequestedQuoteService } from 'src/app/shared/services/requested-quote.service';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';
import { ServiceService } from 'src/app/shared/services/service.service';



@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.scss']
})
export class RequestQuoteComponent implements OnInit {

  form: FormGroup;

  requestedQuoteLine: RequestedQuoteLine;

  requestedQuoteList: RequestedQuote[] = [];
  requestedQuote: RequestedQuote;

  serviceList: Service[] = [];
  service: Service;

  serviceTypeList: ServiceType[] = [];
  serviceType: ServiceType;

  services: Service[] = [];

  error_messages = {
    requestedQuoteDate: [
      { type: 'required', message: 'Date is required' },
    ],
    // requestedQuoteDescription: [
    //   { type: 'required', message: 'A quote description is required' },
    // ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private notificationsService: NotificationsService,
    private requestedQuoteLineService: RequestedQuoteLineService,
    private serviceService: ServiceService,
    private serviceTypeService: ServiceTypeService,
    private requestedQuoteService: RequestedQuoteService
  ) { }

  ngOnInit(): void {
    this.readServiceTypes();
    this.readServices();
    this.createForm();
  }

  dropDown(serviceTypeName) {
    console.log("This is serviceTypeName", serviceTypeName)
    this.services = [];
    this.serviceList.forEach(y => {
      if (y.serviceTypeName == serviceTypeName) {
        this.services.push(y)
        console.log("This is service", y)
      }
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      serviceTypeId: ['', [Validators.required]],
      serviceId: ['', [Validators.required]],
      requestedQuoteDate: ['', [Validators.required]],
      requestedQuoteDescription: ['', [Validators.required]]
    });
  }

  // addServiceList: Service[] = [];

  // CheckBox(service: Service){
  //   this.addServiceList.indexOf(service) === -1 ? this.addServiceList.push(service) : this.ClearCheckBox(this.addServiceList.indexOf(service));
  // }

  // ClearCheckBox(serviceId: number){
  //   this.serviceList.splice(serviceId, 1);
  // }

  readServices() {
    this.serviceService.getServices().subscribe((res) => {
      this.serviceList = res as Service[];
      console.log("this is serviceList", res);
    });
  }

  readServiceTypes() {
    this.serviceTypeService.getServiceTypes().subscribe((res) => {
      this.serviceTypeList = res as ServiceType[];
      console.log("this is serviceList", res);
    });
  }

  // readRequestedQuoteLines(){
  //   this.requestedQuoteLineService.getRequestedQuoteLines().subscribe((res) =>{
  //     this.requestedQuoteLine = res as RequestedQuoteLine[];
  //   })
  // }



}
