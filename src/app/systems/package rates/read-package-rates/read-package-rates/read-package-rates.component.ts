
import { CreatePackageRateComponent } from './../../create-package-price/create-package-rate/create-package-rate.component';
import { EditPackageRateComponent } from './../../edit-package-rate/edit-package-rate/edit-package-rate.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PackageRateService } from 'src/app/shared/services/package-rate.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { PackageRate } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-read-package-rates',
  templateUrl: './read-package-rates.component.html',
  styleUrls: ['./read-package-rates.component.scss']
})
export class ReadPackageRatesComponent implements OnInit {

   packageRateList: PackageRate[] = [];
   packageRates$: Observable<PackageRate[]> = this.service.getPackageRates();
   rate: PackageRate

  displayedColumns: string[] = ['ratepriceId','rateprice', 'dateofprice', 'edit', 'delete'];
  dataSource = new MatTableDataSource (this.packageRateList);
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(
    public dialog: MatDialog,
    private service: PackageRateService, 
    private notificationsService: NotificationsService,
    ) {}
  
  ngOnInit(): void {
    this.getPackageRates();
    this.refreshForm();
    
  }

  refreshForm() {
    this.rate = {
    PackageRateId: 0,
    PackageRatePrice: 0,
    PackagePriceDate: ''
    }
  }
  Close() {
    this.dialog.closeAll();
  }

  getPackageRates(){
    this.packageRates$.subscribe(res=>{
      if(res){
        this.packageRateList = res; 
        console.log(res);
      }
    });
  }

  DeletePackageRate(id){
    console.log(id);
    this.service.DeletePackageRate(id).subscribe((res)=>{
        this.notificationsService.successToaster('Package Rate Deleted', 'Success'); 
        this.getPackageRates();
    });
    
  }


  // readPackageRates(){
  //   this.packageRateService.getPackageRate().subscribe((res)=>{
  //     this.packageRateList=res as PackageRate[];
  //   }, (err:HttpErrorResponse)=>{
  //     this.notificationService.failToaster("Unable to display Payment Types", "Error");
  //     console.log(err);
  //   })
  // }

  // onDelete(id){
  //   this.packageRateService.deletePackageRate(id).subscribe((res)=>{
  //     console.log(id);
  //     this.readPackageRates();
  //   }, (err: HttpErrorResponse)=>{
  //     this.notificationService.failToaster("Pacckage Rate Deleted ", "Success");
  //   });
  // }

 
  routerEditPackageRate(packageRateId: number, packagePrice: string, packagePriceDate: string) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width ='auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'};
    const dialogReference = this.dialog.open(
    EditPackageRateComponent, 
    {
      data: {packageRateId:packageRateId,packagePrice:packagePrice,packagePriceDate:packagePriceDate}
    }
    );
    dialogReference.afterClosed().subscribe((res)=>{
      if(res == 'add'){
        this.notificationsService.successToaster('Package Rate edited', 'Success'); 
        this.getPackageRates();
      }
    });

}
routerAddPackageRate() {
  const dialog = new MatDialogConfig();
  dialog.disableClose = true;
  dialog.width ='auto';
  dialog.height = 'auto';
  const dialogReference = this.dialog.open(
    CreatePackageRateComponent, 
    dialog
  );
  dialogReference.afterClosed().subscribe((res)=>{
    if(res == 'add'){
      this.notificationsService.successToaster('Package Rate Added', 'Success'); 
      this.getPackageRates();
    }
  });
}

}