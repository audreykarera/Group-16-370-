import { Observable } from 'rxjs';
import { DialogInterface, Suppliers } from './../../../../Interfaces/dialog.interface';
import { SupplierserviceService } from './../../supplier service/supplierservice.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateSupplierComponent } from '../../create-supplier/create-supplier/create-supplier.component';
import { EditSuppliersComponent } from '../../edit-supplier/edit-suppliers/edit-suppliers.component';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';

@Component({
  selector: 'app-read-suppliers',
  templateUrl: './read-suppliers.component.html',
  styleUrls: ['./read-suppliers.component.scss']
})
export class ReadSuppliersComponent implements OnInit {

  Suppliers: Suppliers[] = [];
  Suppliers$: Observable<Suppliers[]> = this.service.getSuppliers();
  constructor(private service: SupplierserviceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.Suppliers$.subscribe((res) => {
      console.log(res);
    });
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
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      EditSuppliersComponent, 
      dialogConfig
    );
  }
  openDeleteDialog() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Confirmation Message',
      dialogContent: 'Are you sure you want to delete this?',
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
