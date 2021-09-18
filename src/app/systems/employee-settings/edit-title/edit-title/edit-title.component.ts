import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Title } from 'src/app/Interfaces/Index';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss']
})
export class EditTitleComponent implements OnInit {
  form: FormGroup;
  title: Title;

  error_messages = {
    TitleName: [
      { type: 'required', message: 'Title description is required' },
      { type: 'minlength', message: 'Title must be more than 2 character' },
      { type: 'maxlength', message: 'Title must be less than 4 characters' }
    ]
  }

  constructor(
    private service: TitleService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditTitleComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
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
      TitleName: [this.data.titleName, [Validators.required, Validators.maxLength(4), Validators.minLength(2)]]
    })
  }

  OnSubmit() {
    console.log('Hello')
    if (this.form.valid) {
      const title: Title = this.form.value;
      title.TitleId = this.data.titleId;
      this.service.UpdateTitle(title).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      }, (err: HttpErrorResponse) => {
        if(err.status != 200){
          this.notificationsService.failToaster('There was an error!', 'Error');
        }
      }
      );
    }
  }

  refreshForm() {
    this.title = {
      TitleId: 0,
      TitleName: ''
    }

  }


}

