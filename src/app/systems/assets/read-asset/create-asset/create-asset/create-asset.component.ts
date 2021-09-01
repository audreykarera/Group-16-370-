
import { Equipment } from '../../../../../models/equipment';


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { AssetService } from 'src/app/shared/services/equipment.service';


@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.scss']
})
export class CreateAssetComponent implements OnInit {

  equipment: Equipment;

  constructor(
    public dialog: MatDialog,
    private equipmentService: AssetService
  ) { }

  ngOnInit(): void {
    this.refreshForm();
  }

  onSave(){
    this.equipmentService.postEquipment(this.equipment).subscribe((res)=>{
      this.equipment = res as Equipment;
    })
  }

  refreshForm(){
    this.equipment = {
      EquipmentId: 0,
      EquipmentName: 'Skip',
      EquipmentAvailable: true //Idk what the bool refresh should look like
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
