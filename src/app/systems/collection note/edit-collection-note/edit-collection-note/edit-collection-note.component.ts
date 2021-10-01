import { CollectionNoteService } from 'src/app/shared/services/collection-note.service';
import { CollectionNote } from './../../../../Interfaces/Index';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-edit-collection-note',
  templateUrl: './edit-collection-note.component.html',
  styleUrls: ['./edit-collection-note.component.scss']
})
export class EditCollectionNoteComponent implements OnInit {
  collectionNote: CollectionNote;

  constructor(
    private CollectionNoteService: CollectionNoteService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
    private notificationService: NotificationsService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.refreshForm();
  }

  Close(){
    this.dialog.closeAll();
  }
  refreshForm(){
    this.collectionNote = {
      CollectionNoteId: 0,
      CollectionDate: null ,
      CollectionTime:'' ,
      ClientId:0 ,
      EmployeeId:0,
    }
}

}
