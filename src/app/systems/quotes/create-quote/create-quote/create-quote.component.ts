import { QuoteService } from './../../../../shared/services/quote.service';
import { Quote } from 'src/app/Interfaces/Index';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {

  form: FormGroup;
  quote: Quote;

  error_messages = {
    IssuedDate: [
      {type: 'required', message: 'Date is required'},
      {type: 'minLength', message: 'Date must be more than 2 character'},
      {type: 'maxLength', message: 'Date must be less than 51 characters'}
    ],
    QuoteDescription: [
      {type: 'required', message: 'Quote Description is required'},
      {type: 'minLength', message: 'Quote Description must be more than 2 character'},
      {type: 'maxLength', message: 'Quote Description must be less than 51 characters'}
    ],
    EmployeeFirstName: [
      {type: 'required', message: 'Employee First Name is required'},
      {type: 'minLength', message: 'Equipment must be more than 2 character'},
      {type: 'maxLength', message: 'Equipment must be less than 51 characters'}
    ],
    EmployeeSurname: [
      {type: 'required', message: 'Employee First Name is required'},
      {type: 'minLength', message: 'Equipment must be more than 2 character'},
      {type: 'maxLength', message: 'Equipment must be less than 51 characters'}
    ],
    EmployeeMiddleName: [
      {type: 'required', message: 'Employee First Name is required'},
      {type: 'minLength', message: 'Equipment must be more than 2 character'},
      {type: 'maxLength', message: 'Equipment must be less than 51 characters'}
    ],
    EmployeeEmailAddress: [
      {type: 'required', message: 'Email  is required'},
      {type: 'minLength', message: 'Equipment must be more than 2 character'},
      {type: 'maxLength', message: 'Equipment must be less than 51 characters'}
    ],
    QuoteStatusName: [
      {type: 'required', message: 'Date is required'},
      {type: 'minLength', message: 'Equipment must be more than 2 character'},
      {type: 'maxLength', message: 'Equipment must be less than 51 characters'}
    ],
    CompanyName: [
      {type: 'required', message: 'Date is required'},
      {type: 'minLength', message: 'Equipment must be more than 2 character'},
      {type: 'maxLength', message: 'Equipment must be less than 51 characters'}
    ],
    ClientEmailAddress: [
      {type: 'required', message: 'Date is required'},
      {type: 'minLength', message: 'Equipment must be more than 2 character'},
      {type: 'maxLength', message: 'Equipment must be less than 51 characters'}
    ],
  }

  constructor(
    public dialog: MatDialog,
    private quoteService: QuoteService,
    public dialogRef: MatDialogRef<CreateQuoteComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      IssuedDate: new FormControl(
        this.quote.IssuedDate,
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3)
        ])
      ),
      QuoteDescription: new FormControl(
        this.quote.QuoteDescription,
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3)
        ])
      ),
      EmployeeFirstName: new FormControl(
        this.quote.EmployeeFirstName,
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3)
        ])
      ),
      EmployeeSurnameName: new FormControl(
        this.quote.EmployeeSurname,
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3)
        ])
      ),
      EmployeeMiddleName: new FormControl(
        this.quote.EmployeeMiddleName,
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3)
        ])
      ),
      EmployeeEmailAddress: new FormControl(
        this.quote.EmployeeEmailAddress,
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3)
        ])
      ),
      QuoteStatusName: new FormControl(
        this.quote.QuoteStatusName,
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3)
        ])
      ),
      CompanyName: new FormControl(
        this.quote.CompanyName,
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3)
        ])
      ),
      ClientEmailAddress: new FormControl(
        this.quote.ClientEmailAddress,
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3)
        ])
      ),
    });
  }

  onSubmit(){
    if(this.form.valid) {
      this.quote = this.form.value;
      this.quoteService.CreateQuote(this.quote).subscribe(res =>{
        this.refreshForm();
        this.dialogRef.close('add');
      })
    }
  }

  refreshForm(){
    this.quote = {
      QuoteId: 0,
      IssuedDate: '',
      QuoteDescription: '',
      EmployeeFirstName: '',
      EmployeeSurname: '',
      EmployeeMiddleName: '',
      EmployeeEmailAddress: '',
      QuoteStatusName: '',
      CompanyName: '',
      ClientEmailAddress: '',
    }
  }

  Close(){
    this.dialog.closeAll();
  }

}
