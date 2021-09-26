
//Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
//Mat modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';
import {HttpClientModule} from '@angular/common/http';
//Calendar
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/interaction';
//Components
import { AppComponent } from './app.component';
//Generated Compontents
import { FilterPipe } from './shared/filter.pip';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ReadEmployeesComponent } from './systems/employees/read-employee/read-employees/read-employees.component';
import { CreateEmployeeComponent } from './systems/employees/create-employee/create-employee/create-employee.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { ReadClientsComponent } from './systems/clients/read-clients/read-clients.component';
import { ReadSuppliersComponent } from './systems/supplier/read-supplier/read-suppliers/read-suppliers.component';
import { ReadUsersComponent } from './systems/users/read-users/read-users/read-users.component';
import { GenerateReportComponent } from './systems/reports/generate-report/generate-report/generate-report.component';

import { ViewEmployeeComponent } from './systems/employees/view-employee/view-employee/view-employee.component';
import { EditUsersComponent } from './systems/users/edit-user/edit-users/edit-users.component';
import { ViewClientsComponent } from './systems/clients/view-clients/view-clients/view-clients.component';

import { ReadServicesComponent } from './systems/services/read-service/read-services/read-services.component';
import { CreateServiceComponent } from './systems/services/create-service/create-service/create-service.component';
import { DeleteServiceComponent } from './systems/services/delete-service/delete-service/delete-service.component';
import { EditServiceComponent } from './systems/services/edit-service/edit-service/edit-service.component';
import { ReadPackagesComponent } from './systems/packages/read-packages/read-packages/read-packages.component';
import { EditPackagesComponent } from './systems/packages/edit-packages/edit-packages/edit-packages.component';
import { CreateServicetypeComponent } from './systems/service types/create-servicetypes/create-servicetype/create-servicetype.component';
import { EditServicetypeComponent } from './systems/service types/edit-servicetype/edit-servicetype/edit-servicetype.component';
import { ReadServicetypeComponent } from './systems/service types/read-servicetype/read-servicetype/read-servicetype.component';
import { SharedComponent } from './component/shared components/shared/shared.component';
import { AddCollectionNoteComponent } from './systems/collection note/add-collection-note/add-collection-note/add-collection-note.component';
import { ViewCollectionNoteComponent } from './systems/collection note/add-collection-note/view-collection-note/view-collection-note/view-collection-note.component';
import { ReadCollectionNoteComponent } from './systems/collection note/add-collection-note/read-collection-note/read-collection-note/read-collection-note.component';
import { CreateBookingComponent } from './systems/bookings/create-booking/create-booking/create-booking.component';
import { ReadBookingComponent } from './systems/bookings/read-booking/read-booking/read-booking.component';
import { UpdateBookingComponent } from './systems/bookings/update-booking/update-booking/update-booking.component';
import { DeleteBookingComponent } from './systems/bookings/delete-booking/delete-booking/delete-booking.component';
import { CreateQuoteComponent } from './systems/quotes/create-quote/create-quote/create-quote.component';
import { ReadQuoteComponent } from './systems/quotes/read-quote/read-quote/read-quote.component';
import { CreateInvoiceComponent } from './systems/invoices/create-invoice/create-invoice/create-invoice.component';
import { ReadInvoiceComponent } from './systems/invoices/read-invoice/read-invoice/read-invoice.component';
import { EmployeeSettingsComponent } from './systems/employee-settings/employee-settings.component';
import { ReadComplaintsComponent } from './systems/complaints/read-complaints/read-complaints/read-complaints.component';
import { ViewComplaintsComponent } from './systems/complaints/view-complaints/view-complaints/view-complaints.component';

import { ViewEmployeeTypeComponent } from './systems/employee-settings/view-employee-type/view-employee-type.component';
import { ViewEmploymentStatusesComponent } from './systems/employee-settings/view-employment-statuses/view-employment-statuses.component';
import { ScheduleEmployeeComponent } from './employee-side/schedule-employee/schedule-employee.component';
import { NavbarComponent } from './client-side/client-homepage/navbar/navbar.component';
import { RegisterClientsComponent } from './systems/clients/register-clients/register-clients/register-clients.component';
import { TopNavComponent } from './topnav/top-nav/top-nav.component';
import { LodgeComplaintComponent } from './systems/complaints/lodge-complaint/lodge-complaint/lodge-complaint.component';
import { EmployeeSideCollectionNoteComponent } from './systems/collection note/employee-side-collection-note/employee-side-collection-note.component';
import { EditClientComponent } from './systems/clients/edit-client/edit-client/edit-client.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { ReadScheduleComponent } from './systems/schedule/read-schedule/read-schedule/read-schedule.component';
import { UserSettingsComponent } from './systems/user-settings/user-settings.component';
import { BookingSlotsComponent } from './client-side/booking slots/booking-slots/booking-slots.component';
import { EstimateCostingComponent } from './systems/estimate-costing/estimate-costing/estimate-costing.component';
import { ViewSentQuoteComponent } from './systems/requested quote/view-sent-quote/view-sent-quote/view-sent-quote.component';
import { ClientViewInvoicesComponent } from './systems/invoices/client-view-invoices/client-view-invoices.component';
import { RequestQuoteComponent } from './systems/quotes/request quote/request-quote/request-quote.component';

import { AddEmployeeTypeComponent } from './systems/employee-settings/add-employee-type/add-employee-type/add-employee-type.component';
import { AddTitleComponent } from './systems/employee-settings/add-title/add-title/add-title.component';
import { AddEmploymentStatusComponent } from './systems/employee-settings/add-employment-status/add-employment-status/add-employment-status.component';
import { EditTitleComponent } from './systems/employee-settings/edit-title/edit-title/edit-title.component';
import { ReadPaymentTypeComponent } from './systems/payment-type/read-payment-type/read-payment-type/read-payment-type.component';
import { EditPaymentTypeComponent } from './systems/payment-type/edit-payment-type/edit-payment-type/edit-payment-type.component';
import { CreatePaymentTypeComponent } from './systems/payment-type/create-payment-type/create-payment-type/create-payment-type.component';
import { ReadQuoteStatusComponent } from './systems/quote-status/read-quote-status/read-quote-status/read-quote-status.component';
import { EditQuoteStatusComponent } from './systems/quote-status/edit-quote-status/edit-quote-status/edit-quote-status.component';
import { CreateQuoteStatusComponent } from './systems/quote-status/create-quote-status/create-quote-status/create-quote-status.component';
import { ReadBookingStatusComponent } from './systems/booking-status/read-booking-status/read-booking-status/read-booking-status.component';
import { CreateBookingStatusComponent } from './systems/booking-status/create-booking-status/create-booking-status/create-booking-status.component';
import { ReadPackageRatesComponent } from './systems/package rates/read-package-rates/read-package-rates/read-package-rates.component';
import { EditPackageRateComponent } from './systems/package rates/edit-package-rate/edit-package-rate/edit-package-rate.component';
import { CreateSlotComponent } from './systems/schedule/create-slot/create-slot/create-slot.component';
import { VehicleComponent } from './systems/vehicles/vehicle/vehicle.component';
import { CreateVehicleComponent } from './systems/vehicles/create-vehicle/create-vehicle.component';
import { VehicleSearchPipe } from './shared/vehicle-search.pipe';
import { EquipmentComponent } from './systems/equipment/equipment/equipment/equipment.component';
import { CreateEquipmentComponent } from './systems/equipment/create-equipment/create-equipment/create-equipment.component';
import { ReadExtraCollectionComponent } from './systems/extra-collection/read-extra-collection/read-extra-collection.component';
import { EditExtraCollectionComponent } from './systems/extra-collection/edit-extra-collection/edit-extra-collection/edit-extra-collection.component';
import { EditEquipmentComponent } from './systems/equipment/edit-equipment/edit-equipment/edit-equipment.component';
import { EditVehicleComponent } from './systems/vehicles/edit-vehicle/edit-vehicle/edit-vehicle.component';
import { EditEmploymentStatusComponent } from './systems/employee-settings/edit-employment-status/edit-employment-status/edit-employment-status.component';
import { ReadSlotStatusComponent } from './systems/schedule/read-slot-status/read-slot-status/read-slot-status.component';
import { CreateSlotStatusComponent } from './systems/schedule/create-slot-status/create-slot-status/create-slot-status.component';
import { EditSlotStatusComponent } from './systems/schedule/edit-slot-status/edit-slot-status/edit-slot-status.component';
import { EditBookingStatusComponent } from './systems/booking-status/edit-booking-status/edit-booking-status/edit-booking-status.component';
import { EmployeeSideBookingsComponent } from './systems/bookings/employee-side-bookings/employee-side-bookings/employee-side-bookings.component';
import { EditEmployeeComponent } from './employee-side/edit-employee/edit-employee/edit-employee.component';
import { EditEmpSideCollectionNoteComponent } from './systems/collection note/edit-emp-side-collection-note/edit-emp-side-collection-note/edit-emp-side-collection-note.component';
import { ViewEmpSideCollectionNoteComponent } from './systems/collection note/view-emp-side-collection-note/view-emp-side-collection-note/view-emp-side-collection-note.component';
import { EditEmployeeTypeComponent } from './systems/employee-settings/edit-employee-type/edit-employee-type/edit-employee-type.component';
import { ReadRequestedquoteComponent } from './systems/requested quote/read-requestedquote/read-requestedquote/read-requestedquote.component';
import { PrintClientInvoicesComponent } from './systems/invoices/print-client-invoices/print-client-invoices/print-client-invoices.component';
import { ReadClientBookingComponent } from './client-side/read-client-bookings/read-client-booking/read-client-booking/read-client-booking.component';
import { ViewClientBookingComponent } from './client-side/view-client-booking/view-client-booking/view-client-booking.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditSuppliersComponent } from './systems/supplier/edit-supplier/edit-suppliers/edit-suppliers.component';
import { CreateSupplierComponent } from './systems/supplier/create-supplier/create-supplier/create-supplier.component';
import { ViewEmployeeTitleComponent } from './systems/employee-settings/view-employee-title/view-employee-title.component';
import { AddExtraCollectionComponent } from './systems/extra-collection/add-extra-collection/add-extra-collection/add-extra-collection.component';
import { CreatePackageComponent } from './systems/packages/create-packages/create-package/create-package.component';

import { ReadServicePriceComponent } from './systems/service price/read-service-price/read-service-price/read-service-price.component';
import { CreateServicePriceComponent } from './systems/service price/create-service-price/create-service-price/create-service-price.component';
import { EditServicepriceComponent } from './systems/service price/edit-service-price/edit-serviceprice/edit-serviceprice.component';
import { StaticpageComponent } from './staticpage/staticpage.component';
import { FooterComponent } from './footer/footer.component';
import { WhatWeDoComponent } from './staticpage/what-we-do/what-we-do.component';
import { EmployeedatetimeslotComponent } from './systems/schedule/employeedatetimeslot/employeedatetimeslot.component';
import { CreateEmployeedatetimeslotComponent } from './systems/schedule/employeedatetimeslot/create-employeedatetimeslot/create-employeedatetimeslot.component';
import { EditSlotComponent } from './systems/schedule/edit-slot/edit-slot.component';
import { CreatePackageRateComponent } from './systems/package rates/create-package-price/create-package-rate/create-package-rate.component';
import { ViewBookingsComponent } from './systems/bookings/view-bookings/view-bookings.component';
import { ReadEmpSideCollectionNoteComponent } from './systems/collection note/read-emp-side-collection-note/read-emp-side-collection-note/read-emp-side-collection-note.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interaction
]);


const angularMaterials = [
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  FullCalendarModule,
  MatButtonModule,
  MatPaginatorModule,
  MatIconModule
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    ReadEmployeesComponent,
    CreateEmployeeComponent,
    ConfirmDialogComponent,
    ReadClientsComponent,
    ReadSuppliersComponent,
    ReadUsersComponent,
    GenerateReportComponent,
    CreateSupplierComponent,
    ViewEmployeeComponent,
    EditUsersComponent,
    ViewClientsComponent,
    EditSuppliersComponent,
    ReadServicesComponent,
    CreateServiceComponent,
    DeleteServiceComponent,
    EditServiceComponent,
    CreatePackageComponent,
    ReadPackagesComponent,
    EditPackagesComponent,
    CreateServicetypeComponent,
    EditServicetypeComponent,
    ReadServicetypeComponent,
    SharedComponent,
    AddCollectionNoteComponent,
    ViewCollectionNoteComponent,
    ReadCollectionNoteComponent,
    CreateBookingComponent,
    ReadBookingComponent,
    UpdateBookingComponent,
    DeleteBookingComponent,
    CreateQuoteComponent,
    ReadQuoteComponent,
    CreateInvoiceComponent,
    ReadInvoiceComponent,
    EmployeeSettingsComponent,
    ReadComplaintsComponent,
    ViewComplaintsComponent,
    ViewEmployeeTitleComponent,
    ViewEmployeeTypeComponent,
    ViewEmploymentStatusesComponent,
    ScheduleEmployeeComponent,
    NavbarComponent,
    RegisterClientsComponent,
    TopNavComponent,
    LodgeComplaintComponent,
    EmployeeSideCollectionNoteComponent,
    EditClientComponent,
    ReadScheduleComponent,
    UserSettingsComponent,
    ReadClientBookingComponent,
    BookingSlotsComponent,
    EstimateCostingComponent,
    ViewSentQuoteComponent,
    ClientViewInvoicesComponent,
    RequestQuoteComponent,
    AddEmployeeTypeComponent,
    AddEmployeeTypeComponent,
    AddTitleComponent,
    AddEmploymentStatusComponent,
    EditTitleComponent,
    FilterPipe,
    ReadPaymentTypeComponent,
    EditPaymentTypeComponent,
    CreatePaymentTypeComponent,
    ReadQuoteStatusComponent,
    EditQuoteStatusComponent,
    CreateQuoteStatusComponent,
    ReadBookingStatusComponent,
    CreateBookingStatusComponent,
    ReadPackageRatesComponent,
    EditPackageRateComponent,
    CreatePackageRateComponent,
    ReadBookingStatusComponent,
    CreateSlotComponent,
    VehicleComponent,
    VehicleSearchPipe,
    EquipmentComponent,
    CreateEquipmentComponent,
    CreateVehicleComponent,
    ReadExtraCollectionComponent,
    EditExtraCollectionComponent,
    EditEquipmentComponent,
    EditVehicleComponent,
    EditEmploymentStatusComponent,
    ReadSlotStatusComponent,
    CreateSlotStatusComponent,
    EditSlotStatusComponent,
    EditBookingStatusComponent,
    EmployeeSideBookingsComponent,
    EditEmployeeComponent,
    ReadEmpSideCollectionNoteComponent,
    EditEmpSideCollectionNoteComponent,
    ViewEmpSideCollectionNoteComponent,
    EditEmployeeTypeComponent,
    ReadRequestedquoteComponent,
    PrintClientInvoicesComponent,
    ViewClientBookingComponent,
    AddExtraCollectionComponent,
    ReadServicePriceComponent,
    CreateServicePriceComponent,
    EditServicepriceComponent,
    StaticpageComponent,
    FooterComponent,
    WhatWeDoComponent,
    EmployeedatetimeslotComponent,
    CreateEmployeedatetimeslotComponent,
    EditSlotComponent,
    ViewBookingsComponent
  ],

  imports: [
    ...angularMaterials,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ScheduleModule,
    RecurrenceEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

