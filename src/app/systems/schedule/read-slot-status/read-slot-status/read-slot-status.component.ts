import { SlotStatusService } from './../../../../shared/services/slot-status.service';
import { Observable } from 'rxjs';
import { SlotStatus } from './../../../../Interfaces/Index';
import { CreateSlotStatusComponent } from './../../create-slot-status/create-slot-status/create-slot-status.component';
import { EditSlotStatusComponent } from './../../edit-slot-status/edit-slot-status/edit-slot-status.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationsService } from 'src/app/shared/services/notifications.service';


@Component({
  selector: 'app-read-slot-status',
  templateUrl: './read-slot-status.component.html',
  styleUrls: ['./read-slot-status.component.scss']
})
export class ReadSlotStatusComponent implements OnInit {

  slotStatusList: SlotStatus[] = [];
  slotStatus$: Observable<SlotStatus[]> = this.service.getSlotStatuses();
  slotStatus: SlotStatus;

  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.slotStatusList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(event);
  }


  constructor(
    public dialog: MatDialog,
    private service: SlotStatusService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.GetSlotStatuses();
    this.refreshForm();
  }

  refreshForm() {
    this.slotStatus = {
      SlotStatusId: 0,
      SlotStatusName: ''
    }
  }

  Close() {
    this.dialog.closeAll();
  }

  GetSlotStatuses(){
    this.slotStatus$.subscribe(res=>{
      if(res){
        this.slotStatusList = res;
        console.log(res);
      }
    });
  }

  DeleteSlotStatus(id){
    console.log(id);
    this.service.DeleteSlotStatus(id).subscribe((res)=>{
        this.notificationsService.successToaster('Slot Status Deleted', 'Success');
        this.GetSlotStatuses();
    });

  }

  routerAddSlotStatus() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width ='auto';
    dialog.height ='auto';
    const dialogReference = this.dialog.open(
      CreateSlotStatusComponent,
      dialog
    );

    dialogReference.afterClosed().subscribe((res)=>{
      if(res == 'add'){
        this.notificationsService.successToaster('Slot Status Added', 'Success');
        this.GetSlotStatuses();
      }
    });
  }

  routerEditSlotStatus(slotStatusId: number, slotStatusName: string) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width ='auto';
    dialog.height ='auto';
    const dialogReference = this.dialog.open(
      EditSlotStatusComponent,
      {
        data: {slotStatusId: slotStatusId, slotStatusName: slotStatusName}
      }
    );

    dialogReference.afterClosed().subscribe((res) => {
      if(res == 'add'){
        this.notificationsService.successToaster('Payment Type Edited', 'Success');
        this.GetSlotStatuses();
      }
    });

  }

}
