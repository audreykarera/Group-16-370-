import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-employment-status',
  templateUrl: './edit-employment-status.component.html',
  styleUrls: ['./edit-employment-status.component.scss']
})
export class EditEmploymentStatusComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialog.closeAll();
  }

}
