import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/shared/services/supplier.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.scss']
})
export class CreateSupplierComponent implements OnInit {
  supplier:Supplier;
  supplierList: Supplier[];

  constructor(private supplierService: SupplierService,
    public dialog: MatDialog,
    private notificationService: NotificationsService,
    public router: Router) { }
  
  ngOnInit(): void {
    this.refreshForm();
  }

  Close(){
    this.dialog.closeAll();
  }


  onSave(){
    this.supplierService.postSupplier(this.supplier).subscribe((res)=>{
      this.supplier = res as Supplier; //Again... Look at line 14 for the supplier we are referring to
    });
    this.Close();
    this.notificationService.successToaster("Successfully saved supplied", "Error");
    setTimeout(()=>{
      window.location.reload();
    }, 1000);
  }

  

  //This method rfreshes the form verytime something is done. That is why it is called in the OnInit
  refreshForm(){
    this.supplier = {
      SupplierId: 0,
      SupplierName: '',
      SupplierContactPersonNumber: '', 
      SupplierContactPersonEmail:''
    }
  }

 
}
