import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit {
  vehicle: Vehicle; 

  constructor(public dialog: MatDialog,
    private vehicleService: VehicleService, ) { }

  ngOnInit(): void {
    this.refreshForm();
  }

  Close(){
    this.dialog.closeAll();
  }

  onSave(){
    this.vehicleService.postVehicle(this.vehicle).subscribe((res)=>{
      this.vehicle = res as Vehicle
    }); 
    this.Close();
    setTimeout(()=>{
      window.location.reload();
    }, 1000);
  }

  refreshForm(){
    this.vehicle = {
      VehicleId: 0,
      VehicleMake: '',
      VehicleModel: '', 
      VehicleNumberPlate: '', 
      VehicleAvailable: true
    }
  }

}
