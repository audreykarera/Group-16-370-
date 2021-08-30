import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/shared/services/supplier.service';

@Component({
  selector: 'app-edit-suppliers',
  templateUrl: './edit-suppliers.component.html',
  styleUrls: ['./edit-suppliers.component.scss']
})
export class EditSuppliersComponent implements OnInit {
  supplier:Supplier;
  constructor(private supplierService: SupplierService,
    public dialog: MatDialog, 
    @Inject(MAT_DIALOG_DATA)
    public data:any) { }
  
  ngOnInit(): void {
    console.log(this.data);
    this.refreshForm();
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
  
  onSave(){
    this.supplierService.patchSupplier(this.supplier).subscribe((res)=>{
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

