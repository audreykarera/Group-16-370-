import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { CreateVehicleComponent } from '../create-vehicle/create-vehicle.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicleList: Vehicle[]; 
  vehicle: Vehicle; 
  seachedValue: string = '';

  constructor(
    private vehicleService: VehicleService, 
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.readVehicle()
  }

  readVehicle(){
    this.vehicleService.getVehicles().subscribe((res)=>{
      this.vehicleList = res as Vehicle[]; 
      console.log(this.vehicleList);
    })
  }

  onDelete(id){
    this.vehicleService.deleteVehicle(id).subscribe((res)=>{
    });
    setTimeout(()=>{
      window.location.reload();
    }, 10);
  }

  routerAddvehicle() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateVehicleComponent, 
      dialogConfig
    );
  }

}
