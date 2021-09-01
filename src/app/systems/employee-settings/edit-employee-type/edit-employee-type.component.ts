import { EmployeeTypeService } from './../../../shared/services/employee-type.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeType } from 'src/app/models/employeeType';

@Component({
  selector: 'app-edit-employee-type',
  templateUrl: './edit-employee-type.component.html',
  styleUrls: ['./edit-employee-type.component.scss']
})
export class EditEmployeeTypeComponent implements OnInit {
  
  employeeType: EmployeeType;

  constructor(public dialog: MatDialog,
    private employeeTypeService: EmployeeTypeService,
    @Inject(MAT_DIALOG_DATA)
    public data: any) { }
  
  ngOnInit(): void {
    
    console.log(this.data);
  }
  Close(){
    this.dialog.closeAll();
  }

  readEmployeeType(){
    this.employeeTypeService.getEmployeeType().subscribe((res)=>{
      this.employeeType=res as EmployeeType;
    })
  }

  updateEmployeeType(){
    this.employeeTypeService.patchEmployeeType(this.employeeType).subscribe((res)=>{
      this.employeeType=res as EmployeeType;
    })
  }
  }


