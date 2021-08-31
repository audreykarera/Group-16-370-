import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/shared/services/supplier.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

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
    public data:any,
    private notificationService: NotificationsService) { }
  
  ngOnInit(): void {
    console.log(this.data);
    this.refreshForm();
  }

  Close(){
    this.dialog.closeAll();
  }
  
  onSave(){
    this.supplierService.patchSupplier(this.supplier).subscribe((res)=>{
      this.supplier = res as Supplier; 
    });
    this.Close();
    this.notificationService.successToaster("Successfully saved supplied", "Error");
    setTimeout(()=>{
      window.location.reload();
    }, 1000);
  }

  refreshForm(){
    this.supplier = {
      SupplierId: 0,
      SupplierName: '',
      SupplierContactPersonNumber: '', 
      SupplierContactPersonEmail:''
    }
  }

}

