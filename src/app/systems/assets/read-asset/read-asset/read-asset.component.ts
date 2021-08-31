
import { Equipment, Vehicle } from './../../../../models/asset';

import { Observable } from 'rxjs';

import { DeleteAssetComponent } from './../../delete-asset/delete-asset/delete-asset.component';
import { UpdateAssetComponent } from './../update-asset/update-asset/update-asset.component';
import { CreateAssetComponent } from './../create-asset/create-asset/create-asset.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/shared/services/asset.service';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';



@Component({
  selector: 'app-read-asset',
  templateUrl: './read-asset.component.html',
  styleUrls: ['./read-asset.component.scss']
})
export class ReadAssetComponent implements OnInit {

  vehicleList: Vehicle[];
  vehicle: Vehicle;
  equipmentList: Equipment[];
  equipment: Equipment;

  constructor(
    public dialog: MatDialog,
    private equipmentService: AssetService,
    private vehicleService: AssetService
  ) { }

  ngOnInit(): void {
    this.readEquipment();
    this.readVehicle();
  }

  readEquipment(){
    this.equipmentService.getEquipment().subscribe((res) =>{
      this.equipmentList = res as Equipment[];
    });
  }

  onDeleteEquip(id){
    this.equipmentService.deleteEquipment(id).subscribe((res)=>{
      console.log(id);
      this.readEquipment();
    });
  }

  editEquipment(obj){
    this.equipmentService.postEquipment(obj).subscribe((res)=>{
      this.readEquipment();
    });
  }

  readVehicle(){
    this.vehicleService.getVehicle().subscribe((res) =>{
      this.vehicleList = res as Vehicle[];
    });
  }

  editVehicle(obj){
    this.vehicleService.postVehicle(obj).subscribe((res) =>{
      this.readVehicle();
    })
  }

  onDeleteVehicle(id){
    this.vehicleService.deleteVehicle(id).subscribe((res)=>{
      console.log(id);
      this.readVehicle();
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



  openDeleteDialog() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Confirmation Message',
      dialogContent: 'Are you sure you want to delete this?',
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
