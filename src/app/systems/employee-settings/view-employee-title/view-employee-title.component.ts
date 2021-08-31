import { EditTitleComponent } from './../edit-title/edit-title/edit-title.component';
import { AddTitleComponent } from './../add-title/add-title/add-title.component';
import { TitleService } from './../../../shared/services/title.service';

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from 'src/app/models/titles';

@Component({
  selector: 'app-view-employee-title',
  templateUrl: './view-employee-title.component.html',
  styleUrls: ['./view-employee-title.component.scss']
})
export class ViewEmployeeTitleComponent implements OnInit {
  titleList: Title[]; 
  title: Title; 


  constructor(
    public titleService: TitleService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.readTitles();
  }
  
  readTitles(){
    console.log(this.titleList);
    this.titleService.getTitles().subscribe((res)=>{
      this.titleList = res as Title[];
      console.log(this.titleList);
    });
  }
    onDelete(id){
      this.titleService.deleteTitle(id).subscribe((res)=>{
        console.log(id);
        this.readTitles();
      });
  }

  routerEditEmployeeTitles() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; 
    const dialogReference = this.dialog.open(
      EditTitleComponent,
      dialogConfig
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
