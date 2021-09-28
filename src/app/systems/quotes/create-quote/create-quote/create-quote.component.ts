import { Service } from './../../../../Interfaces/Index';
import { ServiceService } from './../../../../shared/services/service.service';
import { QuoteService } from './../../../../shared/services/quote.service';
import { Quote } from 'src/app/Interfaces/Index';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {

  form: FormGroup;
  quote: Quote;

   serviceList: Service [];
   service: Service;

  error_messages = {
    IssuedDate: [
      { type: 'required', message: 'Date is required' },
      { type: 'minlength', message: 'Date must be more than 2 character' },
      { type: 'maxlength', message: 'Date must be less than 51 characters' }
    ],
    QuoteDescription: [
      { type: 'required', message: 'Quote Description is required' },
      { type: 'minlength', message: 'Quote Description must be more than 2 character' },
      { type: 'maxlength', message: 'Quote Description must be less than 51 characters' }
    ]
  }

  constructor(
    public dialog: MatDialog,
    private quoteService: QuoteService,
    private serviceService: ServiceService,
    public dialogRef: MatDialogRef<CreateQuoteComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
    this.readServices();
  }


  createForm() {
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
    });
  }

  readServices() {
    this.serviceService.getServices().subscribe((res) => {
      this.serviceList = res as Service[];
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.quote = this.form.value;
      this.quoteService.CreateQuote(this.quote).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      })
    }
  }

  refreshForm() {
    this.quote = {
      QuoteId: 0,
      IssuedDate: null,
      QuoteDescription: '',
      EmployeeId: 0,
      QuoteStatusId: 0,
      ClientId: 0,
    }
  }

  Close() {
    this.dialog.closeAll();
  }

}
