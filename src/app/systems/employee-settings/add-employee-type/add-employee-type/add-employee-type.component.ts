import { Component, OnInit } from '@angular/core';
import { EmployeeType } from 'src/app/models/employeeType';
import { EmployeeTypeService } from 'src/app/shared/services/employee-type.service';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';

@Component({
  selector: 'app-add-employee-type',
  templateUrl: './add-employee-type.component.html',
  styleUrls: ['./add-employee-type.component.scss']
})
export class AddEmployeeTypeComponent implements OnInit {
  employeeType: EmployeeType
  constructor(
    private employeeTypeService: EmployeeTypeService
  ) { }

  ngOnInit(): void {
    this.refreshForm()
  }

  onSave(){
    this.employeeTypeService.postEmploymentStatus(this.employeeType).subscribe((res)=>{
      this.employeeType = res as EmployeeType; //Again... Look at line 14 for the supplier we are referring to
    })
  }

  refreshForm(){
    this.employeeType = {
      EmployeeTypeId: 0,
      EmployeeTypeName: ''
    }
  }
}
