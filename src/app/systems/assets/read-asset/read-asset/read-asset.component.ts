import { Observable } from 'rxjs';

import { DeleteAssetComponent } from './../../delete-asset/delete-asset/delete-asset.component';
import { UpdateAssetComponent } from './../update-asset/update-asset/update-asset.component';
import { CreateAssetComponent } from './../create-asset/create-asset/create-asset.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/Interfaces/apiCalls';
import { ApiService } from 'src/app/shared/services/apiServices/asset.service';

@Component({
  selector: 'app-read-asset',
  templateUrl: './read-asset.component.html',
  styleUrls: ['./read-asset.component.scss']
})
export class ReadAssetComponent implements OnInit {

  vehicles: Vehicle[] = [];
  vehicles$: Observable<Vehicle[]> = this.service.getVehicle();

  constructor(
    public dialog: MatDialog,
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.vehicles$.subscribe((res) =>{
      console.log(res);
    });
  }

  routerAddAsset() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; //This must be set to true when the close button works
    const dialogReference = this.dialog.open(
      CreateAssetComponent,
      dialogConfig
    );
  }

  routerEditAsset(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; //This must be set to true when the close button works
    const dialogReference = this.dialog.open(
      UpdateAssetComponent,
      dialogConfig
    );
  }

  routerDeleteAsset() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false; //This must be set to true when the close button works
    const dialogReference = this.dialog.open(
      DeleteAssetComponent,
      dialogConfig
    );
  }

}
