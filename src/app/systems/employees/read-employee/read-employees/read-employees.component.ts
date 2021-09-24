import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../../create-employee/create-employee/create-employee.component';
import { ViewEmployeeComponent } from '../../view-employee/view-employee/view-employee.component';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Employee } from 'src/app/Interfaces/Index';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface EmployeeTable {
  empName: string;
  emailAddress: string;
  cellNumber: number;
}

const ELEMENT_DATA: EmployeeTable[] = [
  {empName:'Nerisha', emailAddress: 'N1@gmail.com', cellNumber: 1},
  {empName:'Audrey', emailAddress: 'A1@gmail.com', cellNumber: 2}
];

@Component({
  selector: 'app-read-employees',
  templateUrl: './read-employees.component.html',
  styleUrls: ['./read-employees.component.scss']
})
export class ReadEmployeesComponent implements OnInit {

  displayedColumns: string[] = ['empName', 'emailAddress', 'cellNumber', 'view'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  employeeList: Employee[];
  employee: Employee;

  constructor(
    public dialog: MatDialog,
    private employeeService: EmployeeService,
    private notificationService: NotificationsService
  ) { }

  ngOnInit(): void {
   this.readEmployees()
  }

  readEmployees(){
    this.employeeService.getEmployees().subscribe((res)=>{
      this.employeeList = res as Employee[];
    },(err: HttpErrorResponse)=>{
      this.notificationService.failToaster("Unable to display employees", "Error");
      console.log(err);
    })
  }

  openAddDialog(){
    this.dialog.open(CreateEmployeeComponent,{height:'auto',width:'auto'});
  }

  openViewDialog(){
    this.dialog.open(ViewEmployeeComponent,{height:'auto',width:'auto'});
  }

  // routerAddEmployee() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   const dialogReference = this.dialog.open(
  //     CreateEmployeeComponent,
  //     dialogConfig
  //   );
  // }

  // routerViewEmployee(employeeId: number, employeeFirstName: string, employeeSurname: string, employeeMiddleName: string,
  //   employeeEmailAddress: string, employeeCellPhoneNumber: string, employeeEmergencyContactFirstName: string,
  //   employeeEmergencyContactSurname: string, employeeEmergencyContactNumber: string, ) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   const dialogReference = this.dialog.open(
  //     ViewEmployeeComponent,
  //     {
  //       disableClose: true,

  //       data: {
  //         employeeId,
  //         employeeFirstName,
  //         employeeSurname,
  //         employeeMiddleName,
  //         employeeEmailAddress,
  //         employeeCellPhoneNumber,
  //         employeeEmergencyContactFirstName,
  //         employeeEmergencyContactSurname,
  //         employeeEmergencyContactNumber
  //       }
  //     }
  //   );
  // }

}
