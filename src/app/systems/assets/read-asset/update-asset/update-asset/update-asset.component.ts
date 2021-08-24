import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.scss']
})
export class UpdateAssetComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openConfirmDialog() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Confirmation Message',
      dialogContent: 'Are you sure you want to save the changes made?',
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
      dialogContent: 'Are you sure you want cancel this ?',
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
