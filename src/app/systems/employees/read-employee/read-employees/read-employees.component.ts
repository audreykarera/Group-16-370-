import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../../create-employee/create-employee/create-employee.component';
import { ViewEmployeeComponent } from '../../view-employee/view-employee/view-employee.component';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-read-employees',
  templateUrl: './read-employees.component.html',
  styleUrls: ['./read-employees.component.scss']
})
export class ReadEmployeesComponent implements OnInit {
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

  routerAddEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateEmployeeComponent, 
      dialogConfig
    );
  }

  routerViewEmployee(employeeId: number, employeeFirstName: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      ViewEmployeeComponent, 
      {
        disableClose: true,
        
        data: {
          employeeId, 
          employeeFirstName
        }
      }
    );
  }

}
