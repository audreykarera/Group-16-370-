import { EditServicetypeComponent } from './../../edit-servicetype/edit-servicetype/edit-servicetype.component';
import { CreateServicetypeComponent } from './../../create-servicetypes/create-servicetype/create-servicetype.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-servicetype',
  templateUrl: './read-servicetype.component.html',
  styleUrls: ['./read-servicetype.component.scss']
})
export class ReadServicetypeComponent implements OnInit {
  
  constructor(
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  routerAddServiceType() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateServicetypeComponent, 
      dialogConfig
    );
  }

  routerEditServiceType() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditServicetypeComponent, 
      dialogConfig
    );

}
}