import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/shared/services/supplier.service';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.scss']
})
export class CreateSupplierComponent implements OnInit {
  supplier:Supplier;

  constructor(private supplierService: SupplierService,
    public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.refreshForm();
  }

  onSave(){
    this.supplierService.postSupplier(this.supplier).subscribe((res)=>{
      this.supplier = res as Supplier; 
    })
  }

  refreshForm(){
    this.supplier = {
      SupplierId: 0,
      SupplierName: '',
      SupplierContactPersonNumber: '', 
      SupplierContactPersonEmail:''
    }
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
