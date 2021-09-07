import { EditEquipmentComponent } from './../../edit-equipment/edit-equipment/edit-equipment.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Equipment } from 'src/app/models/equipment';
import { EquipmentService } from 'src/app/shared/services/equipment.service';
import { CreateEquipmentComponent } from '../../create-equipment/create-equipment/create-equipment.component';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipmentList: Equipment[];
  equipment: Equipment;

  constructor( private equipmentService: EquipmentService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.readEquipment()
  }

  readEquipment(){
    this.equipmentService.getEquipments().subscribe((res)=>{
      this.equipmentList = res as Equipment[];
    });
  }

  onDelete(id){
    this.equipmentService.deleteEquipment(id).subscribe((res)=>{
    });
    setTimeout(()=>{
      window.location.reload();
    }, 10);
  }

  routerAddequipment() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateEquipmentComponent,
      dialogConfig
    );
  }

  routerEditEquipment(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditEquipmentComponent,
      dialogConfig
    );
  }

}
