import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PackageRate } from 'src/app/models/packageRate';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { PackageRateService } from 'src/app/shared/services/package-rate.service';

@Component({
  selector: 'app-create-package-rate',
  templateUrl: './create-package-rate.component.html',
  styleUrls: ['./create-package-rate.component.scss']
})
export class CreatePackageRateComponent implements OnInit {

  packageRate: PackageRate;
  packageRateList: PackageRate[];

  constructor(private packageRateService: PackageRateService,
    public dialog:MatDialog,
    private notificationService:NotificationsService,
    public router:Router) { }

    ngOnInit(): void {
      this.refreshForm();
    }
  
    Close(){
      this.dialog.closeAll();
    }
  
    onSave(){
      this.packageRateService.postPackageRate(this.packageRate).subscribe((res)=>{
        this.packageRate = res as PackageRate; 
      });
      this.Close();
      this.notificationService.successToaster("Successfully saved Payment Type", "Success Message");
      setTimeout(()=>{
        window.location.reload();
      }, 1000);
    }
  
    //This method rfreshes the form verytime something is done. That is why it is called in the OnInit
    refreshForm(){
      this.packageRate = {
        PackageRateId: 0,
        PackageRatePrice: '',
        PackagePriceDate: ''

    }

  }
}
