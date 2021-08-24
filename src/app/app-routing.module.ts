import { EstimateCostingComponent } from './systems/clients/estimate-costing/estimate-costing/estimate-costing.component';
import { EditClientComponent } from './systems/clients/edit-client/edit-client/edit-client.component';
import { EmployeeSideCollectionNoteComponent } from './systems/collection note/employee-side-collection-note/employee-side-collection-note.component';
import { EmployeeSideBookingsComponent } from './systems/bookings/employee-side-bookings/employee-side-bookings.component';
import { LoginComponent } from './employee-side/user-login/login/login.component';
import { LodgeComplaintComponent } from './systems/complaints/lodge-complaint/lodge-complaint/lodge-complaint.component';
import { RegisterClientsComponent } from './systems/clients/register-clients/register-clients/register-clients.component';
import { RequestQuoteComponent } from './systems/quotes/request-quote/request-quote/request-quote.component';
import { EditEmployeeComponent } from './employee-side/edit-employee/edit-employee.component';
import { NavbarComponent } from './client-side/client-homepage/navbar/navbar.component';
import { ScheduleEmployeeComponent } from './employee-side/schedule-employee/schedule-employee.component';
import { ReadQuoteComponent } from './systems/quotes/read-quote/read-quote/read-quote.component';
import { ReadComplaintsComponent } from './systems/complaints/read-complaints/read-complaints/read-complaints.component';
import { ReadScheduleComponent } from './systems/schedule/create-schedule/read-schedule/read-schedule/read-schedule.component';

import { ReadAssetComponent } from './systems/assets/read-asset/read-asset/read-asset.component';

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
  { path: 'schedule', component: ReadScheduleComponent },
  { path: 'requestedquotes', component: ReadRequestedquoteComponent },
  { path: 'assets', component: ReadAssetComponent },
  { path: 'read-complaints', component: ReadComplaintsComponent},
  { path: 'read-quote', component: ReadQuoteComponent},
  { path: 'tempemployeeside', component: ScheduleEmployeeComponent},
  { path: 'tempclientside', component: NavbarComponent},
  { path: 'tempeditemployee', component: EditEmployeeComponent},
  { path: 'request-quote', component: RequestQuoteComponent},
  { path: 'register-client', component: RegisterClientsComponent},
  { path: 'editclient', component: EditClientComponent},
  { path: 'lodge-complaint', component: LodgeComplaintComponent},
  { path: 'login', component: LoginComponent},
  { path: 'employeesidebookings', component: EmployeeSideBookingsComponent},
  { path: 'employeesidecollectionnote', component: EmployeeSideCollectionNoteComponent },
  {path: 'estimate-costing', component: EstimateCostingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


