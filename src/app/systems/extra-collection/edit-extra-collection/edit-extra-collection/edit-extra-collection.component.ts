
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'src/app/shared/services/notifications.service';;
import { ExtraCollectionPrice } from 'src/app/Interfaces/Index';
import { ExtraCollectionPriceService } from './../../../../shared/services/extra-collection-price.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpHeaderResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-extra-collection',
  templateUrl: './edit-extra-collection.component.html',
  styleUrls: ['./edit-extra-collection.component.scss']
})
export class EditExtraCollectionComponent implements OnInit {
  form: FormGroup;
  extracollectionPrice: ExtraCollectionPrice;

  error_messages = {
    ExtraPriceAmount: [
      { type: 'required', message: 'Extra Collection Price required'},
      { type: 'minlength', message: 'Extra Collection Price must be more than 2 characters'},
      { type: 'maxlength', message: 'Extra Collection Price  must be less than 5 characters'}

    ]
  }

  constructor(
    private service: ExtraCollectionPriceService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditExtraCollectionComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.createForm();
    this.refreshForm();
  }

  Close(){
    this.dialog.closeAll();
  }

  createForm(){
    this.form = this.formBuilder.group({
      ExtraPriceAmount: [this.data.extraPriceAmount,
        [Validators.required, Validators.maxLength(5), Validators.minLength(2)]]
    });
  }



  OnSubmit() {
   if(this.form.valid){
   const extracollectionPrice : ExtraCollectionPrice = this.form.value;
   extracollectionPrice. ExtraCollectionPriceId = this.data.extraCollectionPriceId;
   this.service.UpdatePrice(extracollectionPrice).subscribe(res =>{
   this.refreshForm();
   this.dialogRef.close('add');
  }, (err: HttpHeaderResponse) => {
   if (err.status != 200){
     this.notificationsService.failToaster('There was an error!', 'Error');
         }
      }
      );
    }
   }

   refreshForm(){
     this.extracollectionPrice = {
      ExtraCollectionPriceId: 0,
      ExtraPriceAmount:0
     }
   }
}
