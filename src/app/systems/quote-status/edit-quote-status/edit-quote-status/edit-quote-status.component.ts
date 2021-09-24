import { QuoteStatusService } from './../../../../shared/services/quote-status.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { QuoteStatus } from 'src/app/Interfaces/Index';

@Component({
  selector: 'app-edit-quote-status',
  templateUrl: './edit-quote-status.component.html',
  styleUrls: ['./edit-quote-status.component.scss']
})
export class EditQuoteStatusComponent implements OnInit {
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
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditQuoteStatusComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private notificationService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.refreshForm();
  }

  Close() {
    this.dialog.closeAll();
  }

  createForm() {
    this.form = this.formBuilder.group({
      QuoteStatusName: [this.data.quoteStatusName,
        [Validators.required, Validators.maxLength(20), Validators.minLength(2)]]
    });
  }

  OnSubmit(){
    if(this.form.valid) {
      const quoteStatus: QuoteStatus = this.form.value;
      quoteStatus.QuoteStatusId = this.data.quoteStatusId;
      this.quoteStatusService.UpdateQuoteStatus(quoteStatus).subscribe(res=> {
        this.refreshForm();
        this.dialogRef.close('add');
      }, (err: HttpErrorResponse) => {
        if(err.status !=200){
          this.notificationService.failToaster('There was an error!', 'Error');
        }
      }
      );
    }
  }

  refreshForm() {
    this.quoteStatus = {
      QuoteStatusId: 0,
      QuoteStatusName: ''
    }
  
  }

}
