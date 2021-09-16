import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-slot-status',
  templateUrl: './edit-slot-status.component.html',
  styleUrls: ['./edit-slot-status.component.scss']
})
export class EditSlotStatusComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialog.closeAll();
  }

}
