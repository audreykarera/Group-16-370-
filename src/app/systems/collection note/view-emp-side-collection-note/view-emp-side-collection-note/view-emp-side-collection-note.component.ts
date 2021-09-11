import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-emp-side-collection-note',
  templateUrl: './view-emp-side-collection-note.component.html',
  styleUrls: ['./view-emp-side-collection-note.component.scss']
})
export class ViewEmpSideCollectionNoteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialog.closeAll();
  }

}
