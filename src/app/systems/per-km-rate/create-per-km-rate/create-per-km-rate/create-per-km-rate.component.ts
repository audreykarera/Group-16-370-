import { PerKmRateService } from './../../../../shared/services/per-km-rate.service';
import { PerKmRate } from './../../../../Interfaces/Index';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-per-km-rate',
  templateUrl: './create-per-km-rate.component.html',
  styleUrls: ['./create-per-km-rate.component.scss']
})
export class CreatePerKmRateComponent implements OnInit {

  form: FormGroup;
  perKmRate: PerKmRate;

  error_messages = {
    PerKmRateAmount: [
      {type: 'required', message: 'PerKmRateAmount  is required'},
      {type: 'minlength', message: 'PerKmRateAmount must be more than 0 characters'},
      {type: 'maxlength', message: 'PerKmRateAmount must be less than 5 characters'}
    ],
    PerKmRateDistance: [
      {type: 'required', message: 'PerKmRateDistance  is required'},
      {type: 'minlength', message: 'PerKmRateDistance must be more than 2 characters'},
      {type: 'maxlength', message: 'PerKmRateDistance must be less than 10 characters'}
    ],
    PerKmRateDate: [
      {type: 'required', message: 'Date is required'}
    ]
  }

  constructor(
    public dialog: MatDialog,
     private service: PerKmRateService,
    public dialogRef: MatDialogRef<CreatePerKmRateComponent>,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      PerKmRateAmount: new FormControl(
        this.perKmRate.perKmRateAmount,
        Validators.compose([
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(1)
        ])
      ),
      PerKmRateDistance: new FormControl(
        this.perKmRate.perKmRateDistance,
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2)
        ])
      ),
      PerKmRateDate: new FormControl(
        this.perKmRate.perKmRateDate,
        Validators.required
      )
    });
  }

  onSubmit(){
    if(this.form.valid) {
      this.perKmRate = this.form.value;
      this.service.CreatePerKmRate(this.perKmRate).subscribe(res =>{
        this.refreshForm();
        this.dialogRef.close('add');
      })
    }
  }

  refreshForm(){
    this.perKmRate = {
      perKmRateId: 0,
      perKmRateAmount: 0,
      perKmRateDistance: 0,
      perKmRateDate: null
    }
  }

  Close(){
    this.dialog.closeAll();
  }

}
