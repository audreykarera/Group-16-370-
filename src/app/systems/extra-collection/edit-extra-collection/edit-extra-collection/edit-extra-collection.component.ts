import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-extra-collection',
  templateUrl: './edit-extra-collection.component.html',
  styleUrls: ['./edit-extra-collection.component.scss']
})
export class EditExtraCollectionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialog.closeAll();
  }

}
