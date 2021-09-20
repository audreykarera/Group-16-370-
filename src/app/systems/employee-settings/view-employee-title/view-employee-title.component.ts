import { NotificationsService } from './../../../shared/services/notifications.service';
import { EditTitleComponent } from './../edit-title/edit-title/edit-title.component';
import { AddTitleComponent } from './../add-title/add-title/add-title.component';
import { TitleService } from './../../../shared/services/title.service';
import { map } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { id } from '@swimlane/ngx-charts';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from 'src/app/Interfaces/Index';



@Component({
  selector: 'app-view-employee-title',
  templateUrl: './view-employee-title.component.html',
  styleUrls: ['./view-employee-title.component.scss']
})
export class ViewEmployeeTitleComponent implements OnInit {

  titleList: Title[] = [];
  titles$: Observable<Title[]> = this.service.getTitles();
  title: Title


  displayedColumns: string[] = ['titlename', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.titleList);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(event);
  }

  constructor(
    public dialog: MatDialog,
    private service: TitleService, 
    private notificationsService: NotificationsService,) { }

  ngOnInit(): void {
    this.GetTitles();
    this.refreshForm();
  }

  refreshForm() {
    this.title = {
      TitleId: 0,
      TitleName: ''
    }
  }

  Close() {
    this.dialog.closeAll();
  }

  GetTitles(){
    this.titles$.subscribe(res=>{
      if(res){
        this.titleList = res; 
        console.log(res);
      }
    });
  }

  DeleteTitle(id){
    console.log(id);
    this.service.DeleteTitle(id).subscribe((res)=>{
        this.notificationsService.successToaster('Title Deleted', 'Success'); 
        this.GetTitles();
    });
    
  }

// routerEditEmployeeTitles(titleId: number, titleDescription: string) {
//   console.log(titleId, titleDescription);
//   const dialogConfig = new MatDialogConfig();
//   dialogConfig.disableClose = false;
//   const dialogReference = this.dialog.open(
//     EditTitleComponent,
//     {
//       disableClose: true,
//       data: {
//         titleId,
//         titleDescription
//       }
//     }
//   );

// }

routerAddEmployeeTitles(){
  const dialog = new MatDialogConfig();
  dialog.disableClose = true;
  dialog.width = 'auto';
  dialog.height = 'auto',
  dialog.data = { add: 'yes' }
  const dialogReference = this.dialog.open(
    AddTitleComponent,
    dialog
  ); 

  dialogReference.afterClosed().subscribe((res)=>{
    if(res == 'add'){
      this.notificationsService.successToaster('Title Added', 'Success'); 
      this.GetTitles();
    }
  });
}

}
