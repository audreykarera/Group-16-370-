import { EditExtraCollectionComponent } from './../edit-extra-collection/edit-extra-collection/edit-extra-collection.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
} 

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'}
];

@Component({
  selector: 'app-read-extra-collection',
  templateUrl: './read-extra-collection.component.html',
  styleUrls: ['./read-extra-collection.component.scss']
})
export class ReadExtraCollectionComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'edit'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  routerEditExtraCollectionPrice() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditExtraCollectionComponent, 
      dialogConfig
    );

}
}
