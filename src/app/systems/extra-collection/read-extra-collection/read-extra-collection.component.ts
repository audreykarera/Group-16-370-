import { ExtraCollectionPriceService } from './../../../shared/services/extra-collection-price.service';
import { AddExtraCollectionComponent } from './../add-extra-collection/add-extra-collection/add-extra-collection.component';
import { EditExtraCollectionComponent } from './../edit-extra-collection/edit-extra-collection/edit-extra-collection.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { ExtraCollectionPrice } from 'src/app/Interfaces/Index';

export interface ExtraCollection {
  extracollectionid: number;
  price: number;
}

const ELEMENT_DATA: ExtraCollection[] = [
  {extracollectionid: 1, price: 400}
];

@Component({
  selector: 'app-read-extra-collection',
  templateUrl: './read-extra-collection.component.html',
  styleUrls: ['./read-extra-collection.component.scss']
})
export class ReadExtraCollectionComponent implements OnInit {
  priceList: ExtraCollectionPrice[] = [];
  prices$: Observable<ExtraCollectionPrice[]> = this.service.getExtraCollectionPrices();
  price: ExtraCollectionPrice


  displayedColumns: string[] = ['extracollectionid', 'price', 'edit','delete'];
  dataSource = new MatTableDataSource(this.priceList);


  constructor(
    public dialog: MatDialog,
    private service: ExtraCollectionPriceService, 
    private notificationsService: NotificationsService,) { }

  ngOnInit(): void {
    this.getExtraCollectionPrices();
    this.refreshForm();
  }

  refreshForm() {
    this.price = {
      ExtraCollectionPriceId: 0,
      ExtraPriceAmount:''
    }
  }
  Close() {
    this.dialog.closeAll();
  }

  getExtraCollectionPrices(){
    this.prices$.subscribe(res=>{
      if(res){
        this.priceList = res; 
        console.log(res);
      }
    });
  }

  DeletePrice(id){
    console.log(id);
    this.service.DeletePrice(id).subscribe((res)=>{
        this.notificationsService.successToaster('Extra Collection Price Deleted', 'Success'); 
        this.getExtraCollectionPrices();
    });
    
  }

  routerEditExtraCollectionPrice(extraCollectionPriceId: number, extraPriceAmount: string) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'};
    const dialogReference = this.dialog.open(
      EditExtraCollectionComponent,
      {
      data:{ extraCollectionPriceId:extraCollectionPriceId, extraPriceAmount:extraPriceAmount }
      });
      dialogReference.afterClosed().subscribe((res) =>{
        if (res =='add') {
          this.notificationsService.successToaster('Extra collection Price edited', 'Success');
          this.getExtraCollectionPrices();
        }
      });
  }

    routerAddExtraCollectionNote() {
      const dialog = new MatDialogConfig();
      dialog.disableClose = true;
      dialog.width = 'auto';
      dialog.height = 'auto';
      dialog.data = {add: 'yes'};
      const dialogReference = this.dialog.open(
        AddExtraCollectionComponent,
        dialog
      );
      dialogReference.afterClosed().subscribe((res)=>{
        if(res == 'add'){
          this.notificationsService.successToaster('Extra Collection Price Added', 'Success'); 
          this.getExtraCollectionPrices();
        }
      });
    }

}

