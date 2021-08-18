import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewClientsComponent } from '../view-clients/view-clients/view-clients.component';

@Component({
  selector: 'app-read-clients',
  templateUrl: './read-clients.component.html',
  styleUrls: ['./read-clients.component.scss']
})
export class ReadClientsComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  routerViewClient() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      ViewClientsComponent, 
      dialogConfig
    );
  }

}
