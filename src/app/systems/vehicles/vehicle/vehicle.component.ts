import { EditVehicleComponent } from './../edit-vehicle/edit-vehicle/edit-vehicle.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { CreateVehicleComponent } from '../create-vehicle/create-vehicle.component';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  numberPlate: string;
  make: string;
  model: string;
  availability: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {numberPlate: 'FGB345-GP', make: 'KIA', model: 'K2700', availability: true},
  {numberPlate: 'YGD678-GP', make: 'Ford', model: 'Ranger', availability: true},
];

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})



export class VehicleComponent implements OnInit {

  displayedColumns: string[] = [ 'numberPlate', 'make', 'model', 'availability','edit','delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



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

  // routerAddvehicle() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   const dialogReference = this.dialog.open(
  //     CreateVehicleComponent,
  //     dialogConfig
  //   );
  // }

  openAddDialog(){
    this.dialog.open(CreateVehicleComponent,{height:'auto',width:'auto'});
  }

  openEditDialog(){
    this.dialog.open(EditVehicleComponent,{height:'auto',width:'auto'});
  }

  // routerEditVehicle(){
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   const dialogReference = this.dialog.open(
  //     EditVehicleComponent,
  //     dialogConfig
  //   );
  // }

}
