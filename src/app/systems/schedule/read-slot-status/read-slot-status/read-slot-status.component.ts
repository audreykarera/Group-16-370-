import { CreateSlotStatusComponent } from './../../create-slot-status/create-slot-status/create-slot-status.component';
import { EditSlotStatusComponent } from './../../edit-slot-status/edit-slot-status/edit-slot-status.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface SlotStatusTable {
  id: number;
  name: string;
}

const ELEMENT_DATA: SlotStatusTable[] = [
  {id: 1, name: 'Booked & Assigned'},
  {id: 2, name: 'Empty'}
];

@Component({
  selector: 'app-read-slot-status',
  templateUrl: './read-slot-status.component.html',
  styleUrls: ['./read-slot-status.component.scss']
})
export class ReadSlotStatusComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  routerAddSlotStatus() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateSlotStatusComponent,
      dialogConfig
    );
  }

  routerEditSlotStatus() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditSlotStatusComponent,
      dialogConfig
    );
  }

}
