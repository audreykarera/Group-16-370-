import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateSupplierComponent } from '../../create-supplier/create-supplier/create-supplier.component';
import { EditSuppliersComponent } from '../../edit-supplier/edit-suppliers/edit-suppliers.component';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/shared/services/supplier.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-read-suppliers',
  templateUrl: './read-suppliers.component.html',
  styleUrls: ['./read-suppliers.component.scss']
})
export class ReadSuppliersComponent implements OnInit {
  supplierList: Supplier[];
  supplier: Supplier;
  searchText = '';

  constructor(private supplierService: SupplierService,
    public dialog: MatDialog,
    private notificationService: NotificationsService,
  ) { 
  }

  ngOnInit(): void {
    this.readSuppliers();
  }

  

  readSuppliers(){
    this.supplierService.getSuppliers().subscribe((res)=>{
      this.supplierList = res as Supplier[];
    },(err: HttpErrorResponse)=>{
      this.notificationService.failToaster("Unable to display suppliers", "Error");
      console.log(err);
    })
  }

  onDelete(id){
    this.supplierService.deleteSupplier(id).subscribe((res)=>{
      console.log(id);
      this.readSuppliers();
    }, (err: HttpErrorResponse)=>{
      this.notificationService.failToaster("Unable to delete supplier", "Error");
    });
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

  // Filter(event:Event){
  //   let result = this.supplierList.filter(event.target as HTMLInputElement).values
  // }

  // SearchByName(name){
  //   this.supplierService.getSupplierByName(name).subscribe((res)=>{
  //     this.supplier = res as Supplier;
  //   });
  // }
//Used to go to the edit model
  routerEditSupplier(supplierId: number, supplierName: string, supplierContactPersonEmail: string, supplierContactPersonNumber: string) {
    console.log(supplierId, supplierName, supplierContactPersonEmail, supplierContactPersonNumber);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
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

}

