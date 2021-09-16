import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-complaints',
  templateUrl: './view-complaints.component.html',
  styleUrls: ['./view-complaints.component.scss']
})
export class ViewComplaintsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialog.closeAll();
  }


}
