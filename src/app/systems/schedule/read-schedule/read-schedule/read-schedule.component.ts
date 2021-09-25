import { EditSlotComponent } from './../../edit-slot/edit-slot.component';
import { CreateSlotComponent } from './../../create-slot/create-slot/create-slot.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DateTimeSlot } from 'src/app/Interfaces/Index';
import { Observable } from 'rxjs';
import { DateTimeSlotService } from 'src/app/shared/services/date-time-slot.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatTableDataSource } from '@angular/material/table';
import { CreateEmployeedatetimeslotComponent } from '../../employeedatetimeslot/create-employeedatetimeslot/create-employeedatetimeslot.component';

@Component({
  selector: 'app-read-schedule',
  templateUrl: './read-schedule.component.html',
  styleUrls: ['./read-schedule.component.scss']
})
export class ReadScheduleComponent implements OnInit {
  dateTimeSlotList: DateTimeSlot[] = [];
  dateTimeSlot$: Observable<DateTimeSlot[]> = this.service.getDateTimeSlots();
  dateTimeSlot: DateTimeSlot;

  dataSource = new MatTableDataSource(this.dateTimeSlotList);
  displayedColumns: string[] = ['date', 'starttime', 'endtime', 'edit', 'delete', 'assign'];

  constructor(
    public dialog: MatDialog,
    private service: DateTimeSlotService,
    private notificationsService: NotificationsService,
    ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.GetDateTimeSlots();
  }

  refreshForm() {
    this.dateTimeSlot = {
      DateTimeSlotId: 0,
      Date: null,
      StartTime: '',
      EndTime: ''
    }
  }

  GetDateTimeSlots() {
    this.dateTimeSlot$.subscribe(res => {
      if (res) {
        this.dateTimeSlotList = res;
        console.log(this.dateTimeSlot.Date, this.dateTimeSlot.StartTime, this.dateTimeSlot.EndTime)
        console.log(res);
      }
    });
  }

  DeleteEmploymentStatus(id) {
    console.log(id);
    this.service.DeleteDateTimeSlot(id).subscribe((res) => {
      this.notificationsService.successToaster('Slot Deleted', 'Success');
      this.GetDateTimeSlots();
    });

  }

  routerAddSlot() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto',
      dialog.data = { add: 'yes' }
    const dialogReference = this.dialog.open(
      CreateSlotComponent,
      dialog
    );

    dialogReference.afterClosed().subscribe((res) => {
      if (res == 'add') {
        this.notificationsService.successToaster('Slot Added', 'Success');
        this.GetDateTimeSlots();
      }
    });
  }

  routerEditSlot(dateTimeSlotId: number, date: Date, startTime: string, endTime: string) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto',
      dialog.data = { add: 'yes' }
    const dialogReference = this.dialog.open(
      EditSlotComponent,
      {
        data: { dateTimeSlotId: dateTimeSlotId, date: date, startTime: startTime, endTime: endTime}
      });

    dialogReference.afterClosed().subscribe((res) => {
      if (res == 'add') {
        this.notificationsService.successToaster('Slot Edited', 'Success');
        this.GetDateTimeSlots();
      }
    });
  }

  routerAssignResource(dateTimeSlotId: number, date: Date, startTime: string, endTime: string){
    const dialog = new MatDialogConfig(); 
    dialog.disableClose = true; 
    dialog.width = 'auto';
    dialog.height = 'auto',
    dialog.data = { add: 'yes' }
    const dialogReference = this.dialog.open(
      CreateEmployeedatetimeslotComponent, 
      {
        data: {dateTimeSlotId: dateTimeSlotId, date: date, startTime: startTime, endTime: endTime}
      }
    )
  }
}
