import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Vehicle } from 'src/app/Interfaces/Index';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit {
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

  constructor(public dialog: MatDialog,
    private vehicleService: VehicleService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateVehicleComponent> ) { }

    ngOnInit(): void {
      this.refreshForm();
      this.createForm();
      console.log('Hello')
    }
    createForm() {
      this.form = this.formBuilder.group({
        VehicleNumberPlate: new FormControl(
          this.vehicle.VehicleNumberPlate,
          Validators.compose([
            Validators.required,
            Validators.maxLength(8),
            Validators.minLength(2)
          ])
      ),
        VehicleMake: new FormControl(
            this.vehicle.VehicleMake,
            Validators.compose([
              Validators.required,
              Validators.maxLength(19),
              Validators.minLength(2)
            ])
          ),
          VehicleModel: new FormControl(
            this.vehicle.VehicleModel,
            Validators.compose([
              Validators.required,
              Validators.maxLength(49),
              Validators.minLength(2)
            ])
        )
      });
    }
    
    Close() {
      this.dialog.closeAll();
    }
  
    OnSubmit() {
      console.log('Hello')
      if (this.form.valid) {
        this.vehicle = this.form.value;
        this.vehicleService.CreateVehicle(this.vehicle).subscribe(res => {
          this.refreshForm();
          this.dialogRef.close('add');
        });
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

  // onSave(){
  //   this.vehicleService.postVehicle(this.vehicle).subscribe((res)=>{
  //     this.vehicle = res as Vehicle
  //   }); 
  //   this.Close();
  //   setTimeout(()=>{
  //     window.location.reload();
  //   }, 1000);
  //}

  }

  
