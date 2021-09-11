import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateSupplierComponent } from '../../create-supplier/create-supplier/create-supplier.component';
import { EditSuppliersComponent } from '../../edit-supplier/edit-suppliers/edit-suppliers.component';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/shared/services/supplier.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatTableDataSource } from '@angular/material/table';

export interface SupplierTable {
  suppliername: string;
  email: string;
  cellnumber: string;
} 

const ELEMENT_DATA: SupplierTable[] = [
  {suppliername: 'John Smith', email: 'johnsmith@gmail.com', cellnumber: '0826734216'},
];

@Component({
  selector: 'app-read-suppliers',
  templateUrl: './read-suppliers.component.html',
  styleUrls: ['./read-suppliers.component.scss']
})
export class ReadSuppliersComponent implements OnInit {
  // supplierList: Supplier[];
  // supplier: Supplier;
  // searchText = '';

  displayedColumns: string[] = ['suppliername', 'email', 'cellnumber', 'edit', 'delete'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private supplierService: SupplierService,
    public dialog: MatDialog,
    private notificationService: NotificationsService,
  ) { 
  }

  ngOnInit(): void {
    //this.readSuppliers();
  }
  

  

  // readSuppliers(){
  //   this.supplierService.getSuppliers().subscribe((res)=>{
  //     this.supplierList = res as Supplier[];
  //     console.log(this.supplierList)
  //   },(err: HttpErrorResponse)=>{
  //     this.notificationService.failToaster("Unable to display suppliers", "Error");
  //     console.log(err);
  //   })
  // }

  // onDelete(id){
  //   this.supplierService.deleteSupplier(id).subscribe((res)=>{
  //   });
  //   setTimeout(()=>{
  //     window.location.reload();
  //   }, 10);
  // }

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

