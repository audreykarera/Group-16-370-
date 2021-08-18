import { CreateScheduleComponent } from './../../create-schedule/create-schedule.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-schedule',
  templateUrl: './read-schedule.component.html',
  styleUrls: ['./read-schedule.component.scss']
})
export class ReadScheduleComponent implements OnInit {
  constructor(
    public router: Router,
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
  }
  routerAddSlot() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateScheduleComponent, 
      dialogConfig
    );

}
}