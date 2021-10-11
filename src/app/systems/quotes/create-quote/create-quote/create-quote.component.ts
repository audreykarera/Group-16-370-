import { PerKmRateService } from './../../../../shared/services/per-km-rate.service';
import { QuoteLineService } from './../../../../shared/services/quote-line.service';
import { ClientService } from './../../../../shared/services/client.service';
import { QuoteStatusService } from 'src/app/shared/services/quote-status.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { PackageService } from './../../../../shared/services/package.service';
import { Service, Package, Client, QuoteLine, ServiceType, PerKmRate } from './../../../../Interfaces/Index';
import { ServiceService } from './../../../../shared/services/service.service';
import { QuoteService } from './../../../../shared/services/quote.service';
import { Quote, Employee, QuoteStatus } from 'src/app/Interfaces/Index';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {

  form: FormGroup;

  quoteline: QuoteLine;

  quoteList: Quote[] = [];
  quote: Quote;

  employeeList: Employee[] = [];
  employee: Employee;

  quoteStatusList: QuoteStatus[] = [];
  quoteStatus: QuoteStatus;

  perKmRateList: PerKmRate[] = [];
  perKmRate: PerKmRate;

  // clientList: Client[];
  // client: Client;

  serviceList: Service[] = [];
  service: Service;

  serviceTypeList: ServiceType[] = [];
  serviceType: ServiceType;



  error_messages = {
    IssuedDate: [
      { type: 'required', message: 'Date is required' },
    ],
    QuoteDescription: [
      { type: 'required', message: 'A quote description is required' },
    ],

  }

  constructor(
    public dialog: MatDialog,
    private quoteService: QuoteService,
    private quoteLineService: QuoteLineService,
    private empService: EmployeeService,
    private quoteStatusService: QuoteStatusService,
    private perKmRateService: PerKmRateService,
    //private clientService: ClientService,
    private serviceService: ServiceService,
    private serviceTypeService: ServiceTypeService,
    public dialogRef: MatDialogRef<CreateQuoteComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
    this.readEmployees();
    this.readQuoteStatuses();
    this.readServices();
    this.readServiceTypes();
    this.readPerKmRate();
  }


  createForm() {
    this.form = this.formBuilder.group({
      IssuedDate: ['',[Validators.required]],
      QuoteDescription: ['',[Validators.required]],
      EmployeeId: ['',[Validators.required]],
      QuoteStatusId: ['',[Validators.required]],
      ServiceId: ['',[Validators.required]],
      ServiceTypeId: ['', [Validators.required]],
      PerKmRateId: ['', [Validators.required]]
    });

  }

  refreshForm() {
    this.quote = {
      quoteId: 0,
      issuedDate: null,
      quoteDescription: '',
      employeeId: 0,
      quoteStatusId: 0,
      clientId: 0,
    }
  }

  onSubmit() {


    //  if(this.form.valid) {
    //    const Quote: Quote = this.form.value;
    //    Quote.quoteLine = this.addServiceList;
    //    this.quoteService.CreateQuote(Quote).subscribe(res => {
    //      for(let x = 0; x < Quote.quoteLine.length; x++){
    //        let QuoteLine: QuoteLine = {quoteId: res.quoteId, serviceId: Quote.quoteLine[x].serviceId}

    //        this.quoteLineService.CreateQuoteLine(QuoteLine).subscribe(res => {

    //        })
    //      }
    //      this.refreshForm();

    //      this.dialogRef.close('add');
    //    });
    //  }
  }



  addServiceList: Service[] = [];

  CheckBox(service: Service) {
    this.addServiceList.indexOf(service) === -1 ? this.addServiceList.push(service) : this.ClearCheckBox(this.addServiceList.indexOf(service));
  }

  ClearCheckBox(serviceId: number) {
    this.addServiceList.splice(serviceId, 1);
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

  readEmployees() {
    this.empService.getEmployees().subscribe((res) => {
      this.employeeList = res as Employee[];
    });
  }

  readQuoteStatuses() {
    this.quoteStatusService.getQuoteStatuses().subscribe((res) => {
      this.quoteStatusList = res as QuoteStatus[];
    })
  }

  readPerKmRate(){
    this.perKmRateService.getPerKmRates().subscribe((res) => {
      this.perKmRateList = res as PerKmRate[];
    })
  }

  // readClients(){
  //   this.clientService.getClients().subscribe((res) => {
  //     this.clientList = res as unknown as Client[]; //quick fix
  //   })
  // }


  Close() {
    this.dialog.closeAll();
  }

}
