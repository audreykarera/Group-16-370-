import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.scss']
})
export class CreateSupplierComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
  }
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
