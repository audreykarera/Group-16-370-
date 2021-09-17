import { Equipment } from 'src/app/Interfaces/Index';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { EquipmentService } from 'src/app/shared/services/equipment.service';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.scss']
})
export class CreateEquipmentComponent implements OnInit {

 form: FormGroup;
 equipment: Equipment;

 error_messages = {
   EquipmentName: [
     {type: 'required', message: 'Equipment description is required'},
     {type: 'minLength', message: 'Equipment must be more than 2 character'},
     {type: 'maxLength', message: 'Equipment must be less than 51 characters'}
   ]
 }



  constructor(public dialog: MatDialog,
     private equipmentService: EquipmentService,
    public dialogRef: MatDialogRef<CreateEquipmentComponent>,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      EquipmentName: new FormControl(
        this.equipment.EquipmentName,
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3)
        ])
      )
    });
  }

  onSubmit(){
    if(this.form.valid) {
      this.equipment = this.form.value;
      this.equipmentService.CreateEquipment(this.equipment).subscribe(res =>{
        this.refreshForm();
        this.dialogRef.close('add');
      })
    }
  }

  refreshForm(){
    this.equipment = {
      EquipmentId: 0,
      EquipmentName: '',
      EquipmentAvailable: true
    }
  }

  Close(){
    this.dialog.closeAll();
  }







}
