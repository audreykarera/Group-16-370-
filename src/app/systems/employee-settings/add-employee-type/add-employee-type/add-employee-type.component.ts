import { Component, OnInit } from '@angular/core';
import { EmployeeType } from 'src/app/models/employeeType';
import { EmployeeTypeService } from 'src/app/shared/services/employee-type.service';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee-type',
  templateUrl: './add-employee-type.component.html',
  styleUrls: ['./add-employee-type.component.scss']
})
export class AddEmployeeTypeComponent implements OnInit {

  employeeType: EmployeeType

  constructor(
    private employeeTypeService: EmployeeTypeService, 
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.refreshForm()
  }

  Close(){
    this.dialog.closeAll();
  }


  onSave(){
    this.employeeTypeService.postEmployeeType(this.employeeType).subscribe((res)=>{
      this.employeeType = res as EmployeeType; 
    });
    this.Close();
    this.notificationsService.successToaster("New Employment Type added", "Success");
    setTimeout(()=>{
      window.location.reload();
    }, 1000);
  }

  refreshForm(){
    this.employeeType = {
      EmployeeTypeId: 0,
      EmployeeTypeName: ''
    }
  }
}
