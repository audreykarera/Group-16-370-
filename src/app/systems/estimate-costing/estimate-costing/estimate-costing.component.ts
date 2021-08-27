import { ShowEstimateComponent } from './../show-estimate/show-estimate/show-estimate.component';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimate-costing',
  templateUrl: './estimate-costing.component.html',
  styleUrls: ['./estimate-costing.component.scss']
})
export class EstimateCostingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  routerGenerateEstimate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      ShowEstimateComponent, dialogConfig
    );
  }

}
