import { HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from './../../../../shared/services/notifications.service';
import { EquipmentService } from './../../../../shared/services/equipment.service';
import { Equipment } from './../../../../Interfaces/Index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.scss']
})
export class EditEquipmentComponent implements OnInit {

  form: FormGroup;
  equipment: Equipment;

  error_messages = {
    EquipmentName: [
      {type: 'required', message: 'Equipment Name is required'},
      {type: 'minlength', message: 'Equipment Name must be more than 2 characters'},
      {type: 'maxlength', message: 'Equipment Name must be less than 51 characters'}
    ],
    EquipmentAvailable: [
      {type: 'required', message: 'Equipment Availability is required'},
      {type: 'minlength', message: 'Equipment Availability must be more than 2 characters'},
      {type: 'maxlength', message: 'Equipment Availability must be less than 51 characters'}
    ]
  }

  constructor(
    private service: EquipmentService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private notificationsService: NotificationsService
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.refreshForm();
  }

  Close(){
    this.dialog.closeAll();
  }

  createForm(){
    this.form = this.formBuilder.group({
      EquipmentName: [this.data.equipmentName,
        [Validators.required, Validators.maxLength(50), Validators.minLength(3)]
      ],
      EquipmentAvailable: [this.data.equipmentAvailable,
        [Validators.required, Validators.maxLength(50), Validators.minLength(3)]
      ]
    });
  }

  OnSubmit(){
    if(this.form.valid){
      const equipment: Equipment = this.form.value;
      equipment.EquipmentId = this.data.equipmentId;
      // equipment.EquipmentName = this.data.equipmentName;
      // equipment.EquipmentAvailable = this.data.equipmentAvailable;
      this.service.UpdateEquipment(equipment).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      }, (err: HttpErrorResponse) => {
        if(err.status !=200){
          this.notificationsService.failToaster('There was an Error!','Error');
        }
      }
      );
    }
  }

  refreshForm(){
    this.equipment = {
      EquipmentId: 0,
      EquipmentName: '',
      EquipmentAvailable: true
    }
  }

}
