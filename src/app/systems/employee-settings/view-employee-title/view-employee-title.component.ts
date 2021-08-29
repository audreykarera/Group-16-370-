import { EmployeeTitleService } from './../../../shared/employee title service/employee-title.service';
import { AddEmployeeTitleComponent } from './../add-employee-title/add-employee-title.component';
import { DeleteEmployeeTitleComponent } from './../delete-employee-title/delete-employee-title.component';
import { EditEmployeeTitleComponent } from './../edit-employee-title/edit-employee-title.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeTitle } from 'src/app/models/employeeTitle';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-employee-title',
  templateUrl: './view-employee-title.component.html',
  styleUrls: ['./view-employee-title.component.scss']
})
export class ViewEmployeeTitleComponent implements OnInit {

  titles: EmployeeTitle[] = [];
  titles$: Observable<EmployeeTitle[]> = this.serviceEmployeeTitle.getTitles();


  constructor(
    public serviceEmployeeTitle: EmployeeTitleService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.readTitle();
  }
  readTitle(){
    this.titles$.subscribe(data=>{
      this.titles=data;
      console.log(this.titles);
    }, (err:HttpErrorResponse)=>{
      console.log(err);
    })
  } 

  routerEditEmployeeTitles() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      EditEmployeeTitleComponent,
      dialogConfig
    );
  }
  routerDeleteEmployeeTitles() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      DeleteEmployeeTitleComponent,
      dialogConfig
    );
  }
  routerAddEmployeeTitles() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      AddEmployeeTitleComponent,
      dialogConfig
    );
  }

}
