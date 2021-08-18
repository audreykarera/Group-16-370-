
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

  { path: 'assets', component: ReadAssetComponent},

  { path: 'requestedquotes', component: ReadRequestedquoteComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
