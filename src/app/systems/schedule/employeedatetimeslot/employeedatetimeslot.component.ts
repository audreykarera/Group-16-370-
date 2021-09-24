import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';
import { EmployeeDateTimeSlot } from 'src/app/Interfaces/Index';
import { EmployeedatetimeslotService } from 'src/app/shared/services/employeedatetimeslot.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { CreateEmployeedatetimeslotComponent } from './create-employeedatetimeslot/create-employeedatetimeslot.component';


@Component({
  selector: 'app-employeedatetimeslot',
  templateUrl: './employeedatetimeslot.component.html',
  styleUrls: ['./employeedatetimeslot.component.scss']
})
export class EmployeedatetimeslotComponent implements OnInit {
  employeeDateTimeSlotList: EmployeeDateTimeSlot[] = [];
  employeeDateTimeSlot$: Observable<EmployeeDateTimeSlot[]> = this.service.getEmployeeDateTimeSlots();
  employeeDateTimeSlot: EmployeeDateTimeSlot;

  dataSource = new MatTableDataSource(this.employeeDateTimeSlotList);
  displayedColumns: string[] = ['date', 'starttime', 'endtime', 'employee', 'email','vehicleMake','vehicleModel','vehicleNumberPlate','equipment','status','delete'];

  constructor(
    public dialog: MatDialog,
    private service: EmployeedatetimeslotService,
    private notificationsService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.GetEmployeeDateTimeSlots()
  }

  GetEmployeeDateTimeSlots(){
    this.employeeDateTimeSlot$.subscribe(res=>{
      if(res){
        this.employeeDateTimeSlotList = res;
        console.log(res);
      }
    });
  }

}
