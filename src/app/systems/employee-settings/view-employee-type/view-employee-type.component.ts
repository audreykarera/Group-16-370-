import { EmployeeType } from './../../../models/employeeType';
import { EditEmployeeTypeComponent } from './../edit-employee-type/edit-employee-type.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeTypeService } from 'src/app/shared/services/employee-type.service';
import { AddEmployeeTypeComponent } from '../add-employee-type/add-employee-type/add-employee-type.component';


@Component({
  selector: 'app-view-employee-type',
  templateUrl: './view-employee-type.component.html',
  styleUrls: ['./view-employee-type.component.scss']
})
export class ViewEmployeeTypeComponent implements OnInit {
  employeeTypeList: EmployeeType[]; 
  employeeType: EmployeeType; 


  constructor(
    public employeeTypeService: EmployeeTypeService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.readEmployeeTypes();
  }
  
  readEmployeeTypes(){
    console.log(this.employeeTypeList);
    this.employeeTypeService.getEmployeeType().subscribe((res)=>{
      this.employeeTypeList = res as EmployeeType[];
      console.log(this.employeeTypeList);
    });
  }
    onDelete(id){
      this.employeeTypeService.deleteEmployeeType(id).subscribe((res)=>{
        console.log(id);
        this.readEmployeeTypes();
      });
  }

  routerEditEmployeeTypes() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      EditEmployeeTypeComponent,
      dialogConfig
    );
  
  }
  routerAddEmployeeTypes() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
     AddEmployeeTypeComponent,
      dialogConfig
    );
  }
}
