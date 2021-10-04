import { ExtraCollectionPriceService } from './../../../shared/services/extra-collection-price.service';
import { AddExtraCollectionComponent } from './../add-extra-collection/add-extra-collection/add-extra-collection.component';
import { EditExtraCollectionComponent } from './../edit-extra-collection/edit-extra-collection/edit-extra-collection.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { ExtraCollectionPrice } from 'src/app/Interfaces/Index';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-read-extra-collection',
  templateUrl: './read-extra-collection.component.html',
  styleUrls: ['./read-extra-collection.component.scss']
})
export class ReadExtraCollectionComponent implements OnInit {
  extraCollectionPriceList: ExtraCollectionPrice[] = [];
  extraCollectionPrices$: Observable<ExtraCollectionPrice[]> = this.service.getExtraCollectionPrices();
  extraCollectionPrice: ExtraCollectionPrice


  displayedColumns: string[] = [ 'extraCollectionPrice', 'edit','delete'];
  dataSource = new MatTableDataSource(this.extraCollectionPriceList);
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
    private service: ExtraCollectionPriceService,
    private notificationsService: NotificationsService,) { }

  ngOnInit(): void {
    this.GetExtraCollectionPrices();
    this.refreshForm();
  }

  refreshForm() {
    this.extraCollectionPrice = {
      ExtraCollectionPriceId: 0,
      ExtraPriceAmount: '' // It was a number but it gave me errors and i changed it to string
    }
  }
  Close() {
    this.dialog.closeAll();
  }

  GetExtraCollectionPrices(){
    this.extraCollectionPrices$.subscribe(res=>{
      if(res){
        this.extraCollectionPriceList = res;
        console.log(res);
      }
    });
  }

  DeleteExtraCollectionPrice(id){
    console.log(id);
    this.service.DeletePrice(id).subscribe((res)=>{
        this.notificationsService.successToaster('Extra Collection Price Deleted', 'Success');
        this.GetExtraCollectionPrices();
    });

  }

  routerEditExtraCollectionPrice(extraCollectionPriceId: number, extraPriceAmount: number) {
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
          this.GetExtraCollectionPrices();
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
          this.GetExtraCollectionPrices();
        }
      });
    }

}

