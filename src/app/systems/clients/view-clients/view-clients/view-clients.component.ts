import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.scss']
})
export class ViewClientsComponent implements OnInit {


  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  Close(){
    this.dialog.closeAll();
  }

}
