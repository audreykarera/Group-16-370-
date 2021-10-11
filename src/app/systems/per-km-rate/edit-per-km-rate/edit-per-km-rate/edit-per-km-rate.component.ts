import { PerKmRateService } from './../../../../shared/services/per-km-rate.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerKmRate } from 'src/app/Interfaces/Index';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-per-km-rate',
  templateUrl: './edit-per-km-rate.component.html',
  styleUrls: ['./edit-per-km-rate.component.scss']
})
export class EditPerKmRateComponent implements OnInit {

  form: FormGroup;
  perKmRate: PerKmRate;

  error_messages = {
    PerKmRateAmount: [
      {type: 'required', message: 'PerKmRateAmount  is required'},
      {type: 'minlength', message: 'PerKmRateAmount must be more than 0 characters'},
      {type: 'maxlength', message: 'PerKmRateAmount must be less than 10 characters'}
    ]
    // PerKmRateDistance: [
    //   {type: 'required', message: 'PerKmRateDistance  is required'},
    //   {type: 'minlength', message: 'PerKmRateDistance must be more than 2 characters'},
    //   {type: 'maxlength', message: 'PerKmRateDistance must be less than 10 characters'}
    // ]
    // PerKmRateDate: [
    //   {type: 'required', message: 'Date is required'}
    // ]
  }

  constructor(
    private service: PerKmRateService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditPerKmRateComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {

  }

  Close(){
    this.dialog.closeAll();
  }

  createForm(){
    this.form = this.formBuilder.group({
      PerKmRateAmount: [this.data.perkmRateAmount,
        [Validators.required, Validators.maxLength(10), Validators.minLength(1)]
      ],
      // PerKmRateDistance: [this.data.perKmRateDistance,
      //   [Validators.required, Validators.maxLength(50), Validators.minLength(3)]
      // ],
      // PerKmRateDate: [this.data.perKmRateDate,
      // [Validators.required]]
    });
  }

  OnSubmit(){
    if(this.form.valid){
      const perKmRate: PerKmRate = this.form.value;
      perKmRate.perKmRateId = this.data.perKmRateId;
      this.service.UpdatePerKmRate(perKmRate).subscribe(res => {
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
    this.perKmRate = {
      perKmRateId: 0,
      perKmRateAmount: 0,
      perKmRateDistance: 0,
      perKmRateDate: null
    }
  }

}
