
import { Equipment } from './../../../../models/asset';

import { Observable } from 'rxjs';

import { DeleteAssetComponent } from './../../delete-asset/delete-asset/delete-asset.component';
import { UpdateAssetComponent } from './../update-asset/update-asset/update-asset.component';
import { CreateAssetComponent } from './../create-asset/create-asset/create-asset.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/shared/services/asset.service';



@Component({
  selector: 'app-read-asset',
  templateUrl: './read-asset.component.html',
  styleUrls: ['./read-asset.component.scss']
})
export class ReadAssetComponent implements OnInit {

  equipmentList: Equipment[];
  equipment: Equipment;


  constructor(
     public dialog: MatDialog, private equipmentService: AssetService
  ) { }

  ngOnInit(): void {
    this.readEquipment();
  }

  readEquipment(){
    this.equipmentService.getEquipment().subscribe((res) =>{
      this.equipmentList = res as Equipment[];
    })
  }

  onDelete(id){
    this.equipmentService.deleteEquipment(id).subscribe((res)=>{
      console.log(id);
      this.readEquipment();
    });
  }

  editSupplier(obj){
    this.equipmentService.postEquipment(obj).subscribe((res)=>{
      this.readEquipment();
    })
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
