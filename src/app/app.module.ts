
//Modules
import { NgModule } from '@angular/core';
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
import { CreateSupplierComponent } from './systems/supplier/create-supplier/create-supplier/create-supplier.component';
import { ViewEmployeeComponent } from './systems/employees/view-employee/view-employee/view-employee.component';
import { EditUsersComponent } from './systems/users/edit-user/edit-users/edit-users.component';
import { ViewClientsComponent } from './systems/clients/view-clients/view-clients/view-clients.component';
import { EditSuppliersComponent } from './systems/supplier/edit-supplier/edit-suppliers/edit-suppliers.component';
import { ReadServicesComponent } from './systems/services/read-service/read-services/read-services.component';
import { CreateServiceComponent } from './systems/services/create-service/create-service/create-service.component';
import { DeleteServiceComponent } from './systems/services/delete-service/delete-service/delete-service.component';
import { EditServiceComponent } from './systems/services/edit-service/edit-service/edit-service.component';
import { CreatePackageComponent } from './systems/packages/create-packages/create-package/create-package.component';
import { ReadPackagesComponent } from './systems/packages/read-packages/read-packages/read-packages.component';
import { EditPackagesComponent } from './systems/packages/edit-packages/edit-packages/edit-packages.component';
import { DeletePackageComponent } from './systems/packages/delete-packages/delete-package/delete-package.component';
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
import { CreateExtracollectionComponent } from './systems/extra collection/create-extracollection/create-extracollection/create-extracollection.component';
import { ReadExtracollectionComponent } from './systems/extra collection/read-extracollection/read-extracollection/read-extracollection.component';
import { EditExtracollectionComponent } from './systems/extra collection/edit-extracollection/edit-extracollection/edit-extracollection.component';
import { EmployeeSettingsComponent } from './systems/employee-settings/employee-settings.component';
import { ReadAssetComponent } from './systems/assets/read-asset/read-equipment/read-asset.component';
import { ReadRequestedquoteComponent } from './systems/requested quote/read-requestedquote/read-requestedquote/read-requestedquote.component';
import { CreateAssetComponent } from './systems/assets/read-asset/create-asset/create-asset/create-asset.component';
import { UpdateAssetComponent } from './systems/assets/read-asset/update-asset/update-asset/update-asset.component';
import { DeleteAssetComponent } from './systems/assets/delete-asset/delete-asset/delete-asset.component';
import { ReadComplaintsComponent } from './systems/complaints/read-complaints/read-complaints/read-complaints.component';
import { ViewComplaintsComponent } from './systems/complaints/view-complaints/view-complaints/view-complaints.component';
import { ViewEmployeeTitleComponent } from './systems/employee-settings/view-employee-title/view-employee-title.component';
import { ViewEmployeeTypeComponent } from './systems/employee-settings/view-employee-type/view-employee-type.component';
import { ViewEmploymentStatusesComponent } from './systems/employee-settings/view-employment-statuses/view-employment-statuses.component';
import { ScheduleEmployeeComponent } from './employee-side/schedule-employee/schedule-employee.component';
import { NavbarComponent } from './client-side/client-homepage/navbar/navbar.component';
import { RegisterClientsComponent } from './systems/clients/register-clients/register-clients/register-clients.component';
import { TopNavComponent } from './topnav/top-nav/top-nav.component';
import { LodgeComplaintComponent } from './systems/complaints/lodge-complaint/lodge-complaint/lodge-complaint.component';
import { LoginComponent } from './employee-side/user-login/login/login.component';
import { EmployeeSideCollectionNoteComponent } from './systems/collection note/employee-side-collection-note/employee-side-collection-note.component';
import { EditClientComponent } from './systems/clients/edit-client/edit-client/edit-client.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { ReadScheduleComponent } from './systems/schedule/read-schedule/read-schedule/read-schedule.component';
import { UserSettingsComponent } from './systems/user-settings/user-settings.component';
import { CreateUserRoleComponent } from './systems/user-settings/create-user-role/create-user-role.component';
import { EditUserRoleComponent } from './systems/user-settings/edit-user-role/edit-user-role.component';
import { DeleteUserRoleComponent } from './systems/user-settings/delete-user-role/delete-user-role.component';
import { ReadClientBookingComponent } from './client-side/read-client-bookings/read-client-booking/read-client-booking.component';
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
import { CreateQuoteStatusComponent } from './systems/quote-status/create-quote-status/create-quote-status/create-quote-status.component';
import { ReadQuoteStatusComponent } from './systems/quote-status/read-quote-status/read-quote-status/read-quote-status.component';
import { EditQuoteStatusComponent } from './systems/quote-status/edit-quote-status/edit-quote-status/edit-quote-status.component';
import { ReadBookingStatusComponent } from './systems/booking-status/read-booking-status/read-booking-status/read-booking-status.component';
import { CreateSlotComponent } from './systems/schedule/create-slot/create-slot/create-slot.component';
import { ResetPasswordComponent } from './employee-side/user-login/reset-password/reset-password/reset-password.component';
import { CreateVehicleComponent } from './systems/assets/read-asset/create-vehicles/create-vehicle/create-vehicle.component';
import { ReadVehiclesComponent } from './systems/assets/read-asset/read-vehicles/read-vehicles/read-vehicles.component';
import { UpdateVehiclesComponent } from './systems/assets/read-asset/update-vehicles/update-vehicles/update-vehicles.component';


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
    DeletePackageComponent,
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
    CreateExtracollectionComponent,
    ReadExtracollectionComponent,
    EditExtracollectionComponent,
    EmployeeSettingsComponent,
    ReadAssetComponent,
    ReadRequestedquoteComponent,
    CreateAssetComponent,
    UpdateAssetComponent,
    DeleteAssetComponent,
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
    LoginComponent,
    EmployeeSideCollectionNoteComponent,
    EditClientComponent,
    ReadScheduleComponent,
    UserSettingsComponent,
    CreateUserRoleComponent,
    EditUserRoleComponent,
    DeleteUserRoleComponent,
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
    CreateQuoteStatusComponent,
    ReadQuoteStatusComponent,
    EditQuoteStatusComponent,
    ReadBookingStatusComponent,
    CreateSlotComponent,
    ResetPasswordComponent,
    CreateVehicleComponent,
    ReadVehiclesComponent,
    UpdateVehiclesComponent
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
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

