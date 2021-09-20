import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from 'src/app/Interfaces/Index';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss']
})
export class EditVehicleComponent implements OnInit {

  form: FormGroup;
  vehicle: Vehicle

  error_messages = {
    VehicleNumberPlate: [
      { type: 'required', message: 'Number Plate is required' },
      { type: 'minLength', message: 'Number Plate must be more than 1 character' },
      { type: 'maxLength', message: 'Number Plate must be less than 9 characters' }
    ],
    VehicleMake: [
      { type: 'required', message: 'Vehicle Make description is required' },
      { type: 'minLength', message: 'Vehicle Make must be more than 1 character' },
      { type: 'maxLength', message: 'Vehicle Make must be less than 20 characters' }
    ],
    VehicleModel: [
      { type: 'required', message: 'Model  is required' },
      { type: 'minLength', message: 'Model must be more than 1 character' },
      { type: 'maxLength', message: 'Model  must be less than 20 characters' }
    ]
  }

  constructor(private vehicleService: VehicleService,
    public dialog: MatDialog, 
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditVehicleComponent>,
    private notificationService: NotificationsService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,) { }

  ngOnInit(): void {
    this.createForm();
    this.refreshForm();
  }

  Close(){
    this.dialog.closeAll();
  }

  createForm() {
    this.form = this.formBuilder.group({
      VehicleNumberPlate: [this.data.vehicleNumberPlate, [Validators.required, Validators.maxLength(8), Validators.minLength(2)]],
      VehicleMake: [this.data.vehicleMake, [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      VehicleModel: [this.data.vehicleModel, [Validators.required, Validators.maxLength(20), Validators.minLength(2)]]
    })
  }
  OnSubmit() {
    console.log('Hello')
    if (this.form.valid) {
      const vehicle: Vehicle = this.form.value;
      vehicle.VehicleId = this.data.vehicleId;
      this.vehicleService.UpdateVehicle(vehicle).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      }, (err: HttpErrorResponse) => {
        if(err.status != 200){
          this.notificationService.failToaster('There was an error!', 'Error');
        }
      }
      );
    }
  }
  refreshForm(){
    this.vehicle = {
      VehicleId: 0,
      VehicleMake: '',
      VehicleModel: '', 
      VehicleNumberPlate: '', 
      VehicleAvailable: false
    }
  }

}
