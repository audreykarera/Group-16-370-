import { EditExtraCollectionComponent } from './../edit-extra-collection/edit-extra-collection/edit-extra-collection.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

export interface ExtraCollection {
  extracollectionid: number;
  price: number;
} 

const ELEMENT_DATA: ExtraCollection[] = [
  {extracollectionid: 1, price: 400}
];

@Component({
  selector: 'app-read-extra-collection',
  templateUrl: './read-extra-collection.component.html',
  styleUrls: ['./read-extra-collection.component.scss']
})
export class ReadExtraCollectionComponent implements OnInit {

  displayedColumns: string[] = ['extracollectionid', 'price', 'edit'];
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
