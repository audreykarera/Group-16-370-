import { PackageRateService } from './../../../../shared/services/package-rate.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { PackageRate } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-edit-package-rate',
  templateUrl: './edit-package-rate.component.html',
  styleUrls: ['./edit-package-rate.component.scss']
})
export class EditPackageRateComponent implements OnInit {

  packageRate: PackageRate;
  constructor(
    private packageRateService: PackageRateService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
    private notificationService: NotificationsService) { }

    ngOnInit(): void {
      console.log(this.data);
      this.refreshForm();
    }
  
    Close(){
      this.dialog.closeAll();
    }

    // onSave(){
    //   this.packageRateService.patchPackageRate(this.packageRateService).subscribe((res)=>{
    //     this.packageRate = res as PackageRate; 
    //   });
    //   this.Close();
    //   this.notificationService.successToaster("Successfully saved Payment Type", "Error");
    //   setTimeout(()=>{
    //     window.location.reload();
    //   }, 1000);
    // }
  
    refreshForm(){
      this.packageRate = {
        PackageRateId: 0,
        PackageRatePrice: 0,
        PackagePriceDate: ''
      }
  }
}
