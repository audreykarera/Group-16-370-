import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CollectionNote } from 'src/app/Interfaces/Index';
import { CollectionNoteService } from 'src/app/shared/services/collection-note.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { AddCollectionNoteComponent } from '../../add-collection-note/add-collection-note/add-collection-note.component';
import { EditCollectionNoteComponent } from '../../edit-collection-note/edit-collection-note/edit-collection-note.component';

@Component({
  selector: 'app-read-collection-note',
  templateUrl: './read-collection-note.component.html',
  styleUrls: ['./read-collection-note.component.scss']
})
export class ReadCollectionNoteComponent implements OnInit {
  collectionNoteList: CollectionNote[] = [];
  collectionnote$: Observable<CollectionNote[]> = this.service.getCollectionNotes();
  collectionNote: CollectionNote


  displayedColumns: string[] = [ 'date','time', 'employee', 'client', 'edit','delete'];
  dataSource = new MatTableDataSource(this.collectionNoteList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(
    public dialog: MatDialog,
    private service: CollectionNoteService, 
    private notificationsService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.getCollectionNotes();
    this.refreshForm();
  }
  refreshForm() {
    this.collectionNote = {
    CollectionNoteId: 0,
    CollectionDate: null,
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
    routerEditCollectionNote(collectionNoteId: number, collectionDate: string, collectionTime: string, clientId: number, employeeId: number) {
      const dialog = new MatDialogConfig();
      dialog.disableClose = true;
      dialog.width = 'auto';
      dialog.height = 'auto';
      dialog.data = {add: 'yes'};
      const dialogReference = this.dialog.open(
        EditCollectionNoteComponent,
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

}
