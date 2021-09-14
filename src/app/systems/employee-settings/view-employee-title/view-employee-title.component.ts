import { NotificationsService } from './../../../shared/services/notifications.service';
import { EditTitleComponent } from './../edit-title/edit-title/edit-title.component';
import { AddTitleComponent } from './../add-title/add-title/add-title.component';
import { TitleService } from './../../../shared/services/title.service';

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from 'src/app/models/titles';
import { MatTableDataSource } from '@angular/material/table';

export interface Titletable {
  titlename: string;
  titleid: number;
} 

const ELEMENT_DATA: Titletable[] = [
  {titleid: 1, titlename: 'Mr.'},
  
];

@Component({
  selector: 'app-view-employee-title',
  templateUrl: './view-employee-title.component.html',
  styleUrls: ['./view-employee-title.component.scss']
})
export class ViewEmployeeTitleComponent implements OnInit {
  titleList: Title[]; 
  title: Title; 


  displayedColumns: string[] = ['titleid', 'titlename', 'edit', 'delete'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
    //this.readTitles();
  }
  Close(){
    this.dialog.closeAll();
  }
  // readTitles(){
  //   console.log(this.titleList);
  //   this.titleService.getTitles().subscribe((res)=>{
  //     this.titleList = res as Title[];
  //     console.log(this.titleList);
  //   });
  // }
  //   onDelete(id){
  //     this.titleService.deleteTitle(id).subscribe((res)=>{
  //       console.log(id);
  //       this.readTitles();
  //     });
  // }

  routerEditEmployeeTitles(titleId: number, titleDescription: string) {
    console.log(titleId, titleDescription);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      EditTitleComponent,
      {
        disableClose: true,
        data: {
          titleId, 
          titleDescription
        }
      }
    );

  }
  routerAddEmployeeTitles() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      AddTitleComponent,
      dialogConfig
    );
  }

}
