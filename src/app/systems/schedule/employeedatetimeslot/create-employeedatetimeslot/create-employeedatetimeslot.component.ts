import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee, EmployeeDateTimeSlot } from 'src/app/Interfaces/Index';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { EmployeedatetimeslotService } from 'src/app/shared/services/employeedatetimeslot.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-create-employeedatetimeslot',
  templateUrl: './create-employeedatetimeslot.component.html',
  styleUrls: ['./create-employeedatetimeslot.component.scss']
})
export class CreateEmployeedatetimeslotComponent implements OnInit {
  form: FormGroup;
  employeeDateTimeSlot: EmployeeDateTimeSlot;

  employeeList: Employee[]; 
  employee: Employee;

  constructor(
    private service: EmployeedatetimeslotService,
    private serviceEmployee: EmployeeService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateEmployeedatetimeslotComponent>, 
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data.endTime + 'endtime'); 
    console.log(this.data.date + 'date')
    console.log(this.data.startTime + 'starttime')
    this.createForm();
    this.readEmployees(); 
  }

  createForm(){
    this.form = this.formBuilder.group({
      Date: [this.data.date], 
      StartTime: [this.data.startTime], 
      EndTime: [this.data.endTime], 
    });
  }

  // refreshForm() {
  //   this.employeeDateTimeSlot = {
  //     EmployeeDateTimeSlotId: 0, 
  //     DateTimeSlotId: 0,
  //     EmployeeId: 0,
  //     VehicleId: 0,
  //     EquipmentId: 0, 
  //     SlotStatusId: 0
  //   }
  // }

  readEmployees(){
    this.serviceEmployee.getEmployees().subscribe((res)=>{
      this.employeeList = res as Employee[]; 
    });
  }

}
