
import { Observable } from 'rxjs';

import { DeleteAssetComponent } from './../../delete-asset/delete-asset/delete-asset.component';
import { UpdateAssetComponent } from './../update-asset/update-asset/update-asset.component';
import { CreateAssetComponent } from './../create-asset/create-asset/create-asset.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

import { AssetService } from 'src/app/shared/services/apiServices/asset.service';
import { Vehicle } from 'src/app/models/asset';

@Component({
  selector: 'app-read-asset',
  templateUrl: './read-asset.component.html',
  styleUrls: ['./read-asset.component.scss']
})
export class ReadAssetComponent implements OnInit {

  // vehicle: Vehicle;
  // vehicleList: Vehicle[];
   vehicles: Vehicle[] = [];
   vehicles$: Observable<Vehicle[]> = this.assetService.getVehicle();

  constructor(
    public dialog: MatDialog,
    private assetService: AssetService
  ) { }

  ngOnInit(): void {
     this.vehicles$.subscribe((res) =>{
       console.log(res);
     });
    // this.readVehicles();
  }

  // readVehicles(){
  //   this.assetService.getVehicle().subscribe((res) =>{
  //     this.vehicleList = res as Vehicle[];
  //   })
  // }

  // onDelete(id){
  //   this.assetService.deleteVehicle(id).subscribe((res)=>{
  //     console.log(id);
  //     this.readVehicles();
  //   });
  // }

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
