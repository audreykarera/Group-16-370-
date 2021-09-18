import { Observable } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { CreatePaymentTypeComponent } from './../../create-payment-type/create-payment-type/create-payment-type.component';
import { EditPaymentTypeComponent } from './../../edit-payment-type/edit-payment-type/edit-payment-type.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PaymentTypeService } from 'src/app/shared/services/payment-type.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentType } from 'src/app/Interfaces/Index';


@Component({
  selector: 'app-read-payment-type',
  templateUrl: './read-payment-type.component.html',
  styleUrls: ['./read-payment-type.component.scss']
})
export class ReadPaymentTypeComponent implements OnInit {

  paymentTypeList: PaymentType[] = [];
  paymentType$: Observable<PaymentType[]> = this.service.getPaymentTypes();
  paymentType: PaymentType;

  displayedColumns: string[] = ['paymenttypeid', 'paymenttype', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.paymentTypeList);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  constructor(
    public dialog: MatDialog,
    private service: PaymentTypeService,
    private notificationsService: NotificationsService
  ){}

  ngOnInit(): void {
   this.GetPaymentTypes();
    this.refreshForm();
  }

  refreshForm() {
    this.paymentType = {
      PaymentTypeId: 0,
      PaymentTypeName: ''
    }
  }

  routerAddPaymentType() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'};
    const dialogReference = this.dialog.open(
      CreatePaymentTypeComponent,
      dialog
    );

    dialogReference.afterClosed().subscribe((res) => {
      if(res == 'add')
      this.notificationsService.successToaster('Payment Type Added', 'Success');
      this.GetPaymentTypes();
    });
  }

  routerEditPaymentType(paymentTypeId: number, paymentTypeName: string) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'};
    const dialogReference = this.dialog.open(
      EditPaymentTypeComponent,
      {
        data: {paymentTypeId: paymentTypeId, paymentTypeName: paymentTypeName}
      }
    );

    dialogReference.afterClosed().subscribe((res) => {
      if(res == 'add'){
        this.notificationsService.successToaster('Payment Type Edited', 'Success');
        this.GetPaymentTypes();
      }
    });
  }

  Close() {
    this.dialog.closeAll();
  }

  GetPaymentTypes(){
    this.paymentType$.subscribe(res =>{
      if(res){
        this.paymentTypeList = res;
        console.log(res);
      }
    });
  }

  DeletePaymentType(id){
    console.log(id);
    this.service.DeletePaymentType(id).subscribe((res) =>{
      this.notificationsService.successToaster('Payment Type Deleted', 'Success');
      this.GetPaymentTypes();
    })
  }






}
