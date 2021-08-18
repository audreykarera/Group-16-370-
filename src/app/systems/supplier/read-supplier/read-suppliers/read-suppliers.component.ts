import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateSupplierComponent } from '../../create-supplier/create-supplier/create-supplier.component';
import { EditSuppliersComponent } from '../../edit-supplier/edit-suppliers/edit-suppliers.component';

@Component({
  selector: 'app-read-suppliers',
  templateUrl: './read-suppliers.component.html',
  styleUrls: ['./read-suppliers.component.scss']
})
export class ReadSuppliersComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  routerAddSupplier() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateSupplierComponent, 
      dialogConfig
    );
  }

  routerEditSupplier() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditSuppliersComponent, 
      dialogConfig
    );
  }

}
