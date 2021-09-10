import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-slot-status',
  templateUrl: './create-slot-status.component.html',
  styleUrls: ['./create-slot-status.component.scss']
})
export class CreateSlotStatusComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialog.closeAll();
  }

}
