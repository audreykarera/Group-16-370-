import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Title } from 'src/app/Interfaces/Index';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.scss']
})
export class AddTitleComponent implements OnInit {
  form: FormGroup;
  title: Title



  error_messages = {
    TitleName: [
      { type: 'required', message: 'Title description is required' },
      { type: 'minLength', message: 'Title must be more than 1 character' },
      { type: 'maxLength', message: 'Title must be less than 5 characters' }
    ]
  }

  constructor(
    private service: TitleService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<AddTitleComponent>
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
    console.log('Hello')
  }

  createForm() {
    this.form = this.formBuilder.group({
      TitleName: new FormControl(
        this.title.TitleName,
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
    console.log('Hello')
    if (this.form.valid) {
      this.title = this.form.value;
      this.service.CreateTitle(this.title).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
  }

  refreshForm() {
    this.title = {
      TitleId: 0,
      TitleName: ''
    }
  }
}

