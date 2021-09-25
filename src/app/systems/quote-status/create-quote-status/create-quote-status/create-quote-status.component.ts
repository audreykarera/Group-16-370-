import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuoteStatus } from 'src/app/Interfaces/Index';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { QuoteStatusService } from 'src/app/shared/services/quote-status.service';

@Component({
  selector: 'app-create-quote-status',
  templateUrl: './create-quote-status.component.html',
  styleUrls: ['./create-quote-status.component.scss']
})
export class CreateQuoteStatusComponent implements OnInit {

  form: FormGroup;
  quoteStatus: QuoteStatus;

  error_messages = {
    QuoteStatusName: [
      { type: 'required', message: 'Quote Status Name description is required' },
      { type: 'minlength', message: 'Quote Status Name must be more than 1 character' },
      { type: 'maxlength', message: 'Quote Status Name must be less than 21 characters' }
    ]
  }

  constructor(
    private quoteStatusService: QuoteStatusService,
    public dialog:MatDialog,
    private formBuilder: FormBuilder,
    // private notificationService:NotificationsService,
    public dialogRef: MatDialogRef<CreateQuoteStatusComponent>
    ) { }

    ngOnInit(): void {
      this.refreshForm();
      this.createForm();
    }

    createForm(){
      this.form = this.formBuilder.group({
        QuoteStatusName: new FormControl(
          this.quoteStatus.QuoteStatusName,
          Validators.compose([
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(2)
          ])
        )
      });
    }

    Close(){
      this.dialog.closeAll();
    }

    onSubmit(){
      console.log('Hello');
      if(this.form.valid){
        this.quoteStatus = this.form.value;
        this.quoteStatusService.CreateQuoteStatus(this.quoteStatus).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
        });
      }
    }

    refreshForm() {
      this.quoteStatus = {
        QuoteStatusId: 0,
        QuoteStatusName: ''
      }
    }


  }


