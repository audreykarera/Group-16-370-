import { ReadSlotStatusComponent } from './systems/schedule/read-slot-status/read-slot-status/read-slot-status.component';
import { ViewEmployeeTypeComponent } from './systems/employee-settings/view-employee-type/view-employee-type.component';
import { ReadExtraCollectionComponent } from './systems/extra-collection/read-extra-collection/read-extra-collection.component';
import { ViewEmploymentStatusesComponent } from './systems/employee-settings/view-employment-statuses/view-employment-statuses.component';
import { ViewEmployeeTitleComponent } from './systems/employee-settings/view-employee-title/view-employee-title.component';
import { ReadPackageRatesComponent } from './systems/package rates/read-package-rates/read-package-rates/read-package-rates.component';
import { CreateSlotComponent } from './systems/schedule/create-slot/create-slot/create-slot.component';
import { ReadBookingStatusComponent } from './systems/booking-status/read-booking-status/read-booking-status/read-booking-status.component';
import { ReadQuoteStatusComponent } from './systems/quote-status/read-quote-status/read-quote-status/read-quote-status.component';
import { ReadPaymentTypeComponent } from './systems/payment-type/read-payment-type/read-payment-type/read-payment-type.component';
import { CreateBookingComponent } from './systems/bookings/create-booking/create-booking/create-booking.component';

import { EstimateCostingComponent } from './systems/estimate-costing/estimate-costing/estimate-costing.component';
import { BookingSlotsComponent } from './client-side/booking slots/booking-slots/booking-slots.component';
import { ReadClientBookingComponent } from './client-side/read-client-bookings/read-client-booking/read-client-booking.component';

import { UserSettingsComponent } from './systems/user-settings/user-settings.component';

import { ReadScheduleComponent } from './systems/schedule/read-schedule/read-schedule/read-schedule.component';
import { EditClientComponent } from './systems/clients/edit-client/edit-client/edit-client.component';
import { EmployeeSideCollectionNoteComponent } from './systems/collection note/employee-side-collection-note/employee-side-collection-note.component';
import { LoginComponent } from './employee-side/user-login/login/login.component';
import { LodgeComplaintComponent } from './systems/complaints/lodge-complaint/lodge-complaint/lodge-complaint.component';
import { RegisterClientsComponent } from './systems/clients/register-clients/register-clients/register-clients.component';

import { NavbarComponent } from './client-side/client-homepage/navbar/navbar.component';
import { ScheduleEmployeeComponent } from './employee-side/schedule-employee/schedule-employee.component';
import { ReadQuoteComponent } from './systems/quotes/read-quote/read-quote/read-quote.component';
import { ReadComplaintsComponent } from './systems/complaints/read-complaints/read-complaints/read-complaints.component';

import { ReadRequestedquoteComponent } from './systems/requested quote/read-requestedquote/read-requestedquote/read-requestedquote.component';

import { EmployeeSettingsComponent } from './systems/employee-settings/employee-settings.component';
import { ReadInvoiceComponent } from './systems/invoices/read-invoice/read-invoice/read-invoice.component';
import { ReadCollectionNoteComponent } from './systems/collection note/add-collection-note/read-collection-note/read-collection-note/read-collection-note.component';
import { ReadServicetypeComponent } from './systems/service types/read-servicetype/read-servicetype/read-servicetype.component';
import { ReadPackagesComponent } from './systems/packages/read-packages/read-packages/read-packages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadClientsComponent } from './systems/clients/read-clients/read-clients.component';
import { ReadEmployeesComponent } from './systems/employees/read-employee/read-employees/read-employees.component';
import { GenerateReportComponent } from './systems/reports/generate-report/generate-report/generate-report.component';
import { ReadServicesComponent } from './systems/services/read-service/read-services/read-services.component';
import { ReadSuppliersComponent } from './systems/supplier/read-supplier/read-suppliers/read-suppliers.component';
import { ReadUsersComponent } from './systems/users/read-users/read-users/read-users.component';
import { ReadBookingComponent } from './systems/bookings/read-booking/read-booking/read-booking.component';
import { ClientViewInvoicesComponent } from './systems/invoices/client-view-invoices/client-view-invoices.component';
import { RequestQuoteComponent } from './systems/quotes/request quote/request-quote/request-quote.component';
import { EditSuppliersComponent } from './systems/supplier/edit-supplier/edit-suppliers/edit-suppliers.component';
import { VehicleComponent } from './systems/vehicles/vehicle/vehicle.component';
import { EquipmentComponent } from './systems/equipment/equipment/equipment/equipment.component';
import { EmployeeSideBookingsComponent } from './systems/bookings/employee-side-bookings/employee-side-bookings/employee-side-bookings.component';
import { EditEmployeeComponent } from './employee-side/edit-employee/edit-employee/edit-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: ReadEmployeesComponent },
  { path: 'clients', component: ReadClientsComponent },
  { path: 'suppliers', component: ReadSuppliersComponent },
  { path: 'users', component: ReadUsersComponent },
  { path: 'reports', component: GenerateReportComponent },
  { path: 'services', component: ReadServicesComponent },
  { path: 'packages', component: ReadPackagesComponent },
  { path: 'servicetypes', component: ReadServicetypeComponent },
  { path: 'collectionnote', component: ReadCollectionNoteComponent },
  { path: 'invoices', component: ReadInvoiceComponent },
  { path: 'employee-settings', component: EmployeeSettingsComponent },
  { path: 'requestedquotes', component: ReadRequestedquoteComponent },
  { path: 'read-complaints', component: ReadComplaintsComponent},
  { path: 'read-quote', component: ReadQuoteComponent},
  { path: 'Employee Schedule', component: ScheduleEmployeeComponent},
  { path: 'tempclientside', component: NavbarComponent},
  { path: 'tempeditemployee', component: EditEmployeeComponent},
  { path: 'register-client', component: RegisterClientsComponent},
  { path: 'editclient', component: EditClientComponent},
  { path: 'lodge-complaint', component: LodgeComplaintComponent},
  { path: 'login', component: LoginComponent},
  { path: 'employeesidebookings', component: EmployeeSideBookingsComponent},
  { path: 'employeesidecollectionnote', component: EmployeeSideCollectionNoteComponent },
  { path: 'schedule', component: ReadScheduleComponent},
  { path: 'estimate-costing', component: EstimateCostingComponent},
  { path: 'user-settings', component: UserSettingsComponent},
  { path: 'bookings', component: ReadBookingComponent},
  { path: 'mybookings', component: ReadClientBookingComponent},
  { path: 'make-booking', component: BookingSlotsComponent},
  { path: 'clientviewinvoices', component: ClientViewInvoicesComponent},
  { path: 'request-quote', component: RequestQuoteComponent},
  { path: 'create-booking', component: CreateBookingComponent},
  { path: 'packagerates', component: ReadPackageRatesComponent},
  { path: 'editsupplier', component: EditSuppliersComponent},
  { path: 'vehicle', component:VehicleComponent},
  {path: 'equipment', component: EquipmentComponent},
  {path: 'paymenttypes', component: ReadPaymentTypeComponent},
  {path: 'bookingstatus', component: ReadBookingStatusComponent},
  {path: 'quotestatuses', component: ReadQuoteStatusComponent},
  {path: 'titles', component: ViewEmployeeTitleComponent},
  {path: 'employmentstatuses', component: ViewEmploymentStatusesComponent},
  {path: 'extra-collection', component: ReadExtraCollectionComponent},
  {path: 'employeetypes', component: ViewEmployeeTypeComponent},
  {path: 'read-slot-status', component: ReadSlotStatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


