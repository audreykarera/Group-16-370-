import { AddCollectionNoteComponent } from './../../add-collection-note/add-collection-note/add-collection-note.component';
import { ViewEmpSideCollectionNoteComponent } from './../../view-emp-side-collection-note/view-emp-side-collection-note/view-emp-side-collection-note.component';
import { EditEmpSideCollectionNoteComponent } from './../../edit-emp-side-collection-note/edit-emp-side-collection-note/edit-emp-side-collection-note.component';
import { EmployeeSideCollectionNoteComponent } from './../../employee-side-collection-note/employee-side-collection-note.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { CollectionNoteService } from 'src/app/shared/services/collection-note.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

export interface CollectionNote {
  CollectionNoteId: number;
  CollectionDate: string;
  CollectionTime: string;
  ClientId: number;
  EmployeeId: number;

}

@Component({
  selector: 'app-read-emp-side-collection-note',
  templateUrl: './read-emp-side-collection-note.component.html',
  styleUrls: ['./read-emp-side-collection-note.component.scss']
})
export class ReadEmpSideCollectionNoteComponent implements OnInit {
  collectionNoteList: CollectionNote[] = [];
  collectionnote$: Observable<CollectionNote[]> = this.service.getCollectionNotes();
  collectionNote: CollectionNote


  displayedColumns: string[] = ['collectionNoteNum', 'date','time','client','employee', 'edit','view'];
  dataSource = new MatTableDataSource(this.collectionNoteList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialog: MatDialog,
    private service: CollectionNoteService, 
    private notificationsService: NotificationsService,) { }

  ngOnInit(): void {
    this.getCollectionNotes();
    this.refreshForm();
  }

  refreshForm() {
    this.collectionNote = {
  CollectionNoteId: 0,
  CollectionDate: '',
  CollectionTime: '',
  ClientId: 0,
  EmployeeId: 0

    }
  }
  Close() {
    this.dialog.closeAll();
  }

  getCollectionNotes(){
    this.collectionnote$.subscribe(res=>{
      if(res){
        this.collectionNoteList = res; 
        console.log(res);
      }
    });
  }

  DeleteCollectionNote(id){
    console.log(id);
    this.service.DeleteCollectionNote(id).subscribe((res)=>{
        this.notificationsService.successToaster('Extra Collection Price Deleted', 'Success'); 
        this.getCollectionNotes();
    });
    
  }


 
  routerAddCollectionNote() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'};
    const dialogReference = this.dialog.open(
      AddCollectionNoteComponent,
      dialog
    );
    dialogReference.afterClosed().subscribe((res)=>{
      if(res == 'add'){
        this.notificationsService.successToaster('Collection Note Added', 'Success'); 
        this.getCollectionNotes();
      }
    });
  }
  routerEditCollectionNote(collectionNoteId: number, collectionDate: string, collectionTime: string, clientId: number, employeeId: number) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'};
    const dialogReference = this.dialog.open(
      EditEmpSideCollectionNoteComponent,
      {
      data:{ collectionNoteId:collectionNoteId, collectionDate:collectionDate, collectionTime:collectionTime,clientId:clientId,employeeId:employeeId}
      });
      dialogReference.afterClosed().subscribe((res) =>{
        if (res =='add') {
          this.notificationsService.successToaster('Collection Note was edited', 'Success');
          this.getCollectionNotes();
        }
      });
  }


}
