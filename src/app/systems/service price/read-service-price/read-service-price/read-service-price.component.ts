import { ServicePriceService } from './../../../../shared/services/service-price.service';
import { CreateServicePriceComponent } from './../../create-service-price/create-service-price/create-service-price.component';
import { EditServicepriceComponent } from './../../edit-service-price/edit-serviceprice/edit-serviceprice.component';
import { CreateServicetypeComponent } from './../../../service types/create-servicetypes/create-servicetype/create-servicetype.component';
import { EditServiceComponent } from './../../../services/edit-service/edit-service/edit-service.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePrice } from 'src/app/Interfaces/Index';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

// const ELEMENT_DATA: ServicePriceTable[] = [
//   {serviceprice: 650, dateofprice: '09/11/2021'},
// ];

@Component({
  selector: 'app-read-service-price',
  templateUrl: './read-service-price.component.html',
  styleUrls: ['./read-service-price.component.scss']
})
export class ReadServicePriceComponent implements OnInit {

  servicePriceList: ServicePrice[] = [];
  servicePrices$: Observable<ServicePrice[]> = this.service.getServicePrices();
  servicePrice: ServicePrice

  displayedColumns: string[] = ['servicepriceamount', 'servicepricedate', 'edit', 'delete'];
  dataSource = new MatTableDataSource (this.servicePriceList);
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(event);
  }

  constructor(
    public dialog: MatDialog,
    private service: ServicePriceService, 
    private notificationsService: NotificationsService,) { }

    ngOnInit(): void {
      this.GetServicePrices();
      this.refreshForm();
    }

    refreshForm() {
      this.servicePrice = {
        ServicePriceId: 0,
        ServicePriceAmount: '',
        ServicePriceDate:''
      }
    }

    Close() {
      this.dialog.closeAll();
    }

    GetServicePrices(){
      this.servicePrices$.subscribe(res=>{
        if(res){
          this.servicePriceList = res; 
          console.log(res);
        }
      });
    }

    DeleteServicePrice(id){
      console.log(id);
      this.service.DeleteServicePrice(id).subscribe((res)=>{
          this.notificationsService.successToaster('Service Price Deleted', 'Success'); 
          this.GetServicePrices();
      });
      
    }
  // routerAddServicePrice() {
  //   const dialog = new MatDialogConfig();
  //   dialog.disableClose = true;
  //   dialog.width ='20rem';
  //   dialog.height = 'auto';
  //   const dialogReference = this.dialog.open(
  //     CreateServicePriceComponent, 
  //     dialog
  //   );
  // }

  // routerAddServicePrices(){
  //   const dialog = new MatDialogConfig();
  //   dialog.disableClose = true;
  //   dialog.width = 'auto';
  //   dialog.height = 'auto',
  //   dialog.data = { add: 'yes' }
  //   const dialogReference = this.dialog.open(
  //     CreateServicePriceComponent,
  //     dialog
  //   ); 
  // }

  routerAddServicePrices() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
   dialog.height = 'auto';
   dialog.data = {add: 'yes'};
    const dialogReference = this.dialog.open(
      CreateServicePriceComponent,
      dialog
    );
    dialogReference.afterClosed().subscribe((res)=>{
     if(res == 'add'){
       this.notificationsService.successToaster('Service Price Added', 'Success'); 
       this.GetServicePrices();
     }
   });
  }
}