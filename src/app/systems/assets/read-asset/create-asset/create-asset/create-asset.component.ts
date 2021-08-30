import { AssetService } from './../../../../../shared/services/apiServices/asset.service';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { Vehicle } from 'src/app/models/asset';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.scss']
})
export class CreateAssetComponent implements OnInit {

  vehicle: Vehicle;

  constructor(
    public dialog: MatDialog,
    private assetService: AssetService
  ) { }

  ngOnInit(): void {
    this.refreshForm();
  }

  onSave(){
    this.assetService.postVehicle(this.vehicle).subscribe((res) =>{
      this.vehicle = res as Vehicle;
    })
  }

  refreshForm(){
    this.vehicle = {
      vehicleID: 0,
      vehicleNumberPlate: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleAvailable: true //not sure how it should be setup
    }
  }


  openConfirmDialog() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Confirmation Message',
      dialogContent: 'Are you sure you want to save this?',
      cancelButtonLabel: 'No',
      confirmButtonLabel: 'Yes',
      callbackMethod: () => {

      },
    };
    this.dialog.open(SharedComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }

  /**
     * This method invokes the Cancel Dialog
     */
  openCancelDialog() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Confirmation Message',
      dialogContent: 'Are you sure you want cancel this ?',
      cancelButtonLabel: 'No',
      confirmButtonLabel: 'Yes',
      callbackMethod: () => {

      },
    };
    this.dialog.open(SharedComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }

}
