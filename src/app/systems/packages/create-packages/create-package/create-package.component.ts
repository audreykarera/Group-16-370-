import { PackageService } from './../../../../shared/services/package.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Package } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.scss']
})
export class CreatePackageComponent implements OnInit {
  form: FormGroup;
  package: Package



  error_messages = {
    PackageName: [
      { type: 'required', message: 'Package is required' },
      { type: 'minLength', message: 'Package must be more than 1 character' },
      { type: 'maxLength', message: 'Package must be less than 5 characters' }
      
    ],
    PackageDetails: [
      { type: 'required', message: 'Package details are required' },
      { type: 'minLength', message: 'Rate date must be more than 2 character' },
      { type: 'maxLength', message: 'Rate must be less than 20 characters' }
    ],
    ExtraCollection: [
      { type: 'required', message: 'Extra Collection is required' },
    ],
    ExtraPriceAmount: [
      { type: 'required', message: 'Extra Collection Price is required' },
      { type: 'minLength', message: 'Rate date must be more than 2 character' },
      { type: 'maxLength', message: 'Rate must be less than 5 characters' }
    ],
    ServiceName: [
      { type: 'required', message: 'Service Name is required' },
      { type: 'minLength', message: 'Service Name must be more than 2 character' },
      { type: 'maxLength', message: 'Service Name must be less than 15 characters' }
    ]
    
  }

  constructor(
    private service: PackageService,
    private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<CreatePackageComponent>,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
  }
  
  createForm() {
    this.form = this.formBuilder.group({
      PackageName: new FormControl(
        this.package.PackageName,
          Validators.compose([
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(1)
        ])
      ),
      PackageDetails: new FormControl(
        this.package.PackageDetails,
          Validators.compose([
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(2)
        ])
      ),
      ExtraCollection: new FormControl(
        this.package.ExtraCollection,
          Validators.compose([
          Validators.required,
        ])
      ),
      ExtraPriceAmount: new FormControl(
        this.package.ExtraPriceAmount,
          Validators.compose([
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(2)
        ])
      ),
      ServiceName: new FormControl(
        this.package.ServiceName,
          Validators.compose([
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(2)
        ])
      )
    });
  }

  OnSubmit() {
    console.log('Hello')
    if (this.form.valid) {
      this.package = this.form.value;
      this.service.CreatePackage(this.package).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
  }

  refreshForm() {
    this.package = {
    PackageId: 0,
    PackageName: '',
    PackageDetails: '',
    PackagePrice: '',
    ExtraCollection: true,
    ExtraPriceAmount:'',
    ServiceName:''
    }
  }
  Close(){
    this.dialog.closeAll();
  }
  
  // openConfirmDialog() {
  //   const dialogInterface: DialogInterface = {
  //     dialogHeader: 'Confirmation Message',
  //     dialogContent: 'Are you sure you want to save this?',
  //     cancelButtonLabel: 'No',
  //     confirmButtonLabel: 'Yes',
  //     callbackMethod: () => {
       
  //     },
  //   };
  //   this.dialog.open(SharedComponent, {
  //     width: '300px',
  //     data: dialogInterface,
  //   });
  // }
  
  /**
     * This method invokes the Cancel Dialog
     */
  // openCancelDialog() {
  //   const dialogInterface: DialogInterface = {
  //     dialogHeader: 'Confirmation Message',
  //     dialogContent: 'Are you sure you want cancel this ?',
  //     cancelButtonLabel: 'No',
  //     confirmButtonLabel: 'Yes',
  //     callbackMethod: () => {
       
  //     },
  //   };
  //   this.dialog.open(SharedComponent, {
  //     width: '300px',
  //     data: dialogInterface,
  //   });
  // }

}
