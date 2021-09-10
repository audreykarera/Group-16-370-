import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ViewClientsComponent } from '../view-clients/view-clients/view-clients.component';

export interface PeriodicElement {
  companyname: string;
  clientname: string;
  cellnumber: string;
  email: string;
} 

const ELEMENT_DATA: PeriodicElement[] = [
  {companyname: 'Coco-Cola', clientname: 'Micheal Scott', cellnumber: '0834472143', email: 'michealscott@cocacola.com' },
];

@Component({
  selector: 'app-read-clients',
  templateUrl: './read-clients.component.html',
  styleUrls: ['./read-clients.component.scss']
})
export class ReadClientsComponent implements OnInit {

  displayedColumns: string[] = ['companyname', 'clientname', 'cellnumber', 'email', 'view',];
  dataSource = ELEMENT_DATA;

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
