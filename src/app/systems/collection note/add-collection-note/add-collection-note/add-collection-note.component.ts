
import { DialogInterface } from './../../../../interfaces/dialog.interface';
import { Component,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';



@Component({
  selector: 'app-add-collection-note',
  templateUrl: './add-collection-note.component.html',
  styleUrls: ['./add-collection-note.component.scss']
})
export class AddCollectionNoteComponent implements OnInit {
  
  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
/**
   * This method invokes the confirm Dialog
   */
 openConfirmDialog() {
  const dialogInterface: DialogInterface = {
    dialogHeader: 'Confirmation Message',
    dialogContent: 'Are you sure you want to save this?',
    cancelButtonLabel: 'No',
    confirmButtonLabel: 'Yes',
    callbackMethod: () => {
     
    },
  };
  this.dialog.open(SharedComponent, {
    width: '300px',
    data: dialogInterface,
  });
}

/**
   * This method invokes the Cancel Dialog
   */
openCancelDialog() {
  const dialogInterface: DialogInterface = {
    dialogHeader: 'Confirmation Message',
    dialogContent: 'Are you sure you want cancel?',
    cancelButtonLabel: 'No',
    confirmButtonLabel: 'Yes',
    callbackMethod: () => {
     
    },
  };
  this.dialog.open(SharedComponent, {
    width: '300px',
    data: dialogInterface,
  });
}


}
