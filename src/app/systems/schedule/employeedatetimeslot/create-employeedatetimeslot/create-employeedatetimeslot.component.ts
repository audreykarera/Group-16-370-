import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee, EmployeeDateTimeSlot, Equipment, SlotStatus, Vehicle } from 'src/app/Interfaces/Index';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { EmployeedatetimeslotService } from 'src/app/shared/services/employeedatetimeslot.service';
import { EquipmentService } from 'src/app/shared/services/equipment.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { SlotStatusService } from 'src/app/shared/services/slot-status.service';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

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

  vehicleList: Vehicle[]; 
  vehicle: Vehicle;

  equipmentList: Equipment[]; 
  equipment: Equipment;

  slotStatusList: SlotStatus[]; 
  slotStatus: SlotStatus;

  constructor(
    private service: EmployeedatetimeslotService,
    private serviceEmployee: EmployeeService,
    private serviceVehicle: VehicleService,
    private serviceEquipment: EquipmentService,
    private serviceStatus: SlotStatusService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateEmployeedatetimeslotComponent>, 
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data.dateTimeSlotId);
    // this.createForm();
    this.readEmployees(); 
    this.readVehicle();
    this.readEquipment();
    this.readSlotStatus();
    this. finalForm();
  }

  // createForm(){
  //   this.form = this.formBuilder.group({
  //     Date: [this.data.date], 
  //     StartTime: [this.data.startTime], 
  //     EndTime: [this.data.endTime], 
  //   });
  // }

  finalForm(){
    this.form = this.formBuilder.group({
      DateTimeSlotId: [this.data.dateTimeSlotId], 
      EmployeeId: [''], 
      VehicleId: [''], 
      EquipmentId: [''], 
      SlotStatusId: ['']
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

  readVehicle(){
    this.serviceVehicle.getVehicles().subscribe((res)=>{
      this.vehicleList = res as Vehicle[];
    });
  }

  readEquipment(){
    this.serviceEquipment.getEquipments().subscribe((res)=>{
      this.equipmentList = res as Equipment[];
    });
  }

  readSlotStatus(){
    this.serviceStatus.getSlotStatuses().subscribe((res)=>{
      this.slotStatusList = res as SlotStatus[];
    })
  }

  OnSubmit(){
    if(this.form.valid){
      this.employeeDateTimeSlot = this.form.value; 
      console.log(this.form.value);
      this.service.CreateEmployeeDateTimeSlot(this.employeeDateTimeSlot).subscribe(res =>{
        this.dialogRef.close('add');
      });
    }
  }



}
