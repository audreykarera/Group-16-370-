
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddCollectionNoteComponent } from '../../add-collection-note/add-collection-note.component';
import { ViewCollectionNoteComponent } from '../../view-collection-note/view-collection-note/view-collection-note.component';

export interface CollectionNoteTable {
  collectionnoteid: number;
  clientname: string
  date: string;
}

const ELEMENT_DATA: CollectionNoteTable[] = [
  {collectionnoteid: 9, clientname: 'Audrey Sir', date: '29 May 2021'}
];

@Component({
  selector: 'app-read-collection-note',
  templateUrl: './read-collection-note.component.html',
  styleUrls: ['./read-collection-note.component.scss']
})
export class ReadCollectionNoteComponent implements OnInit {

  displayedColumns: string[] = ['collectionnoteid', 'clientname', 'date', 'view'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
   public dialog: MatDialog
  ){}

  ngOnInit(): void {
  }

  routerAddCollectionNote(){
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'};
    const dialogReference = this.dialog.open(
      AddCollectionNoteComponent,
      dialog
    );
  }

    routerViewCollectionNote() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'};
    const dialogReference = this.dialog.open(
      ViewCollectionNoteComponent,
      dialog
    );
  }

}
