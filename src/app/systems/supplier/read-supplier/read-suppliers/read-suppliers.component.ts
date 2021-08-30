import { Observable } from 'rxjs';
import { DialogInterface} from './../../../../Interfaces/dialog.interface';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateSupplierComponent } from '../../create-supplier/create-supplier/create-supplier.component';
import { EditSuppliersComponent } from '../../edit-supplier/edit-suppliers/edit-suppliers.component';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/shared/services/supplier.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-read-suppliers',
  templateUrl: './read-suppliers.component.html',
  styleUrls: ['./read-suppliers.component.scss']
})
export class ReadSuppliersComponent implements OnInit {
  supplierList: Supplier[];
  supplier: Supplier;

  constructor(private supplierService: SupplierService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.readSuppliers();
  }

  readSuppliers(){
    this.supplierService.getSuppliers().subscribe((res)=>{
      this.supplierList = res as Supplier[];
    })
  }

  onDelete(id){
    this.supplierService.deleteSupplier(id).subscribe((res)=>{
      console.log(id);
      this.readSuppliers();
    });
  }

  editSupplier(obj){
    this.supplierService.postSupplier(obj).subscribe((res)=>{
      this.readSuppliers();
    })
  }
//Used to go to the add model
  routerAddSupplier() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateSupplierComponent, 
      dialogConfig
    );
  }
//Used to go to the edit model
  routerEditSupplier(supplierId: number, supplierName: string, supplierContactPersonEmail: string, supplierContactPersonNumber: string) {
    console.log(supplierId, supplierName, supplierContactPersonEmail, supplierContactPersonNumber);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      EditSuppliersComponent, 
      {
        disableClose: true,
        data: {
          supplierId, 
          supplierName, 
          supplierContactPersonEmail,
          supplierContactPersonNumber
        }
      }
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
function obj(obj: any): any {
  throw new Error('Function not implemented.');
}

