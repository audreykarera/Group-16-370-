import { Employees } from './../../../../Interfaces/dialog.interface';
import { EmployeeService } from './../../employee service/employee.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../../create-employee/create-employee/create-employee.component';
import { ViewEmployeeComponent } from '../../view-employee/view-employee/view-employee.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read-employees',
  templateUrl: './read-employees.component.html',
  styleUrls: ['./read-employees.component.scss']
})
export class ReadEmployeesComponent implements OnInit {

  Employees: Employees[] = [];
  Employees$: Observable<Employees[]> = this.service.getEmployees();
  constructor(private service: EmployeeService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.Employees$.subscribe((res) => {
      console.log(res);
    });
  }

  routerAddEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateEmployeeComponent, 
      dialogConfig
    );
  }

  routerViewEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      ViewEmployeeComponent, 
      dialogConfig
    );
  }

}
