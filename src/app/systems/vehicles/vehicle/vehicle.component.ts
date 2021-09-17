import { EditVehicleComponent } from './../edit-vehicle/edit-vehicle/edit-vehicle.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { CreateVehicleComponent } from '../create-vehicle/create-vehicle.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Vehicle } from 'src/app/Interfaces/Index';
import { Observable } from 'rxjs';
import { NotificationsService } from 'src/app/shared/services/notifications.service';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})

export class VehicleComponent implements OnInit {
  vehicleList: Vehicle[] = [];
  vehicles$: Observable<Vehicle[]> = this.vehicleService.getVehicles();
  vehicle: Vehicle


  displayedColumns: string[] = [ 'numberPlate', 'make', 'model', 'availability','edit','delete'];
  dataSource = new MatTableDataSource(this.vehicleList);
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private vehicleService: VehicleService,
    public dialog: MatDialog,
    private notificationService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.GetVehicles();
    this.refreshForm();
  }

  refreshForm() {
    this.vehicle = {
      VehicleId: 0,
      VehicleNumberPlate: '',
      VehicleMake: '',
      VehicleModel: '',
      VehicleAvailable: true
    }
  }

  Close() {
    this.dialog.closeAll();
  }

  GetVehicles(){
    this.vehicles$.subscribe(res=>{
      if(res){
        this.vehicleList = res; 
        console.log(res);
      }
    });
  }

  DeleteVehicle(id){
    console.log(id);
    this.vehicleService.DeleteVehicle(id).subscribe((res)=>{
        this.notificationService.successToaster('Vehicle Deleted', 'Success'); 
        this.GetVehicles();
    });
    
  }
  

   routerAddvehicle() {
     const dialog = new MatDialogConfig();
     dialog.disableClose = true;
     dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'};
     const dialogReference = this.dialog.open(
       CreateVehicleComponent,
       dialog
     );
     dialogReference.afterClosed().subscribe((res)=>{
      if(res == 'add'){
        this.notificationService.successToaster('Vehicle Added', 'Success'); 
        this.GetVehicles();
      }
    });
   }

  // openAddDialog(){
  //   this.dialog.open(CreateVehicleComponent,{height:'auto',width:'auto'});
  // }

  // openEditDialog(){
  //   this.dialog.open(EditVehicleComponent,{height:'auto',width:'auto'});
  // }

  //  routerEditVehicle(){
  //    const dialog = new MatDialogConfig();
  //    dialog.disableClose = true;
  //    dialog.width = 'auto';
  //   dialog.height = 'auto';
  //   dialog.data = {add: 'yes'};
  //    const dialogReference = this.dialog.open(
  //      EditVehicleComponent,
  //      dialog
  //    );
   }


