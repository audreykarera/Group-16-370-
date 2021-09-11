import { HttpErrorResponse } from '@angular/common/http';
import { PaymentType } from 'src/app/models/paymentType';
import { CreatePaymentTypeComponent } from './../../create-payment-type/create-payment-type/create-payment-type.component';
import { EditPaymentTypeComponent } from './../../edit-payment-type/edit-payment-type/edit-payment-type.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PaymentTypeService } from 'src/app/shared/services/payment-type.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

export interface PeriodicElement {
  paymenttype: string;
  paymenttypeid: number;
} 

const ELEMENT_DATA: PeriodicElement[] = [
  {paymenttypeid: 1, paymenttype: 'Cash'}

];


@Component({
  selector: 'app-read-payment-type',
  templateUrl: './read-payment-type.component.html',
  styleUrls: ['./read-payment-type.component.scss']
})
export class ReadPaymentTypeComponent implements OnInit {
  // paymentTypeList:PaymentType[];
  // paymentType:PaymentType;
  // searchText='';

  displayedColumns: string[] = ['paymenttypeid', 'paymenttype', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog: MatDialog,){}
    // private paymentTypeService:PaymentTypeService,
    // private notificationService: NotificationsService) 
   

  ngOnInit(): void {
    //this.readPaymentTypes();
  }

  // readPaymentTypes(){
  //   this.paymentTypeService.getPaymentTypes().subscribe((res)=>{
  //     this.paymentTypeList=res as PaymentType[];
  //   }, (err:HttpErrorResponse)=>{
  //     this.notificationService.failToaster("Unable to display Payment Types", "Error");
  //     console.log(err);
  //   })
  // }

  // onDelete(id){
  //   this.paymentTypeService.deletePaymentType(id).subscribe((res)=>{
  //     console.log(id);
  //     this.readPaymentTypes();
  //   }, (err: HttpErrorResponse)=>{
  //     this.notificationService.failToaster("Unable to delete payment type", "Error");
  //   });
  // }

  routerAddPaymentType() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreatePaymentTypeComponent, 
      dialogConfig
    );
  }
  routerEditPaymentType(paymentTypeId:number, paymentTypeName:string) {
    console.log(paymentTypeId,paymentTypeName);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditPaymentTypeComponent, 
      {
        disableClose:true,
        data:{
          paymentTypeId,
          paymentTypeName
        }
      }
    );

}
}
