import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-emp-side-collection-note',
  templateUrl: './edit-emp-side-collection-note.component.html',
  styleUrls: ['./edit-emp-side-collection-note.component.scss']
})
export class EditEmpSideCollectionNoteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialog.closeAll();
  }

}
