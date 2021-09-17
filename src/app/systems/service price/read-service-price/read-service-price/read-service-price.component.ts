import { CreateServicePriceComponent } from './../../create-service-price/create-service-price/create-service-price.component';
import { EditServicepriceComponent } from './../../edit-service-price/edit-serviceprice/edit-serviceprice.component';
import { CreateServicetypeComponent } from './../../../service types/create-servicetypes/create-servicetype/create-servicetype.component';
import { EditServiceComponent } from './../../../services/edit-service/edit-service/edit-service.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface ServicePriceTable {
  serviceprice: number;
  dateofprice: string;
} 

const ELEMENT_DATA: ServicePriceTable[] = [
  {serviceprice: 650, dateofprice: '09/11/2021'},
];

@Component({
  selector: 'app-read-service-price',
  templateUrl: './read-service-price.component.html',
  styleUrls: ['./read-service-price.component.scss']
})
export class ReadServicePriceComponent implements OnInit {

  displayedColumns: string[] = ['serviceprice', 'dateofprice', 'edit', 'delete'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
   
  }

  routerAddServicePrice() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width ='20rem';
    dialog.height = 'auto';
    const dialogReference = this.dialog.open(
      CreateServicePriceComponent, 
      dialog
    );
  }
  routerEditServicePrice() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width ='20rem';
    dialog.height = 'auto';
    const dialogReference = this.dialog.open(
    EditServicepriceComponent, 
    dialog
    );

}

}