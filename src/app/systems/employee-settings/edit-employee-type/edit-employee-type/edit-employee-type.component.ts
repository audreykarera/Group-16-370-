import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-employee-type',
  templateUrl: './edit-employee-type.component.html',
  styleUrls: ['./edit-employee-type.component.scss']
})
export class EditEmployeeTypeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialog.closeAll();
  }

}
