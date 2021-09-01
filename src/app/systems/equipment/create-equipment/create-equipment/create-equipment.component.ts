import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Equipment } from 'src/app/models/equipment';
import { EquipmentService } from 'src/app/shared/services/equipment.service';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.scss']
})
export class CreateEquipmentComponent implements OnInit {
  equipment: Equipment; 

  constructor(public dialog: MatDialog,
    private equipmentService: EquipmentService,) { }

  ngOnInit(): void {
    this.refreshForm()
  }

  Close(){
    this.dialog.closeAll();
  }

  onSave(){
    this.equipmentService.postVehicle(this.equipment).subscribe((res)=>{
      this.equipment = res as Equipment
    }); 
    this.Close();
    setTimeout(()=>{
      window.location.reload();
    }, 1000);
  }

  refreshForm(){
    this.equipment = {
      EquipmentId: 0,
      EquipmentName: '',
      EquipmentAvailable: true
    }
  }

}
