import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-collection-note',
  templateUrl: './view-collection-note.component.html',
  styleUrls: ['./view-collection-note.component.scss']
})
export class ViewCollectionNoteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  Close(){
    this.dialog.closeAll();
  }

}
