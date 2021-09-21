import { ExtraCollectionPriceService } from './../../../../shared/services/extra-collection-price.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ExtraCollectionPrice } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-add-extra-collection',
  templateUrl: './add-extra-collection.component.html',
  styleUrls: ['./add-extra-collection.component.scss']
})
export class AddExtraCollectionComponent implements OnInit {
  form: FormGroup;
  price: ExtraCollectionPrice

  error_messages = {
    ExtraPriceAmount: [
      { type: 'required', message: 'Extra Collection Price is required' },
      { type: 'minLength', message: 'Price must be more than 1 character' },
      { type: 'maxLength', message: 'Price must be less than 5 characters' }
    ]
  }

  constructor( 
    private service: ExtraCollectionPriceService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<AddExtraCollectionComponent>) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
    console.log('Hello')
  }
  createForm() {
    this.form = this.formBuilder.group({
      ExtraPriceAmount: new FormControl(
        this.price.ExtraPriceAmount,
          Validators.compose([
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(2)
        ])
      )
    });
  }

  Close() {
    this.dialog.closeAll();
  }

  OnSubmit() {
    if (this.form.valid) {
      this.price = this.form.value;
      this.service.CreatePrice(this.price).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
  }

  refreshForm() {
    this.price = {
    ExtraCollectionPriceId: 0,
    ExtraPriceAmount: ''
    }
  }
}
