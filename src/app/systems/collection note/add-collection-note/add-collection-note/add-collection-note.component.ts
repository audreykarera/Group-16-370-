import { CollectionNoteService } from 'src/app/shared/services/collection-note.service';
import { CollectionNote } from './../../../../Interfaces/Index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-collection-note',
  templateUrl: './add-collection-note.component.html',
  styleUrls: ['./add-collection-note.component.scss']
})
export class AddCollectionNoteComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    CollectionDate: ['', Validators.required],
    CollectionTime: ['', Validators.required],
    ClientId: ['', Validators.required],
    EmployeeId: ['', Validators.required],

  })
  collectionNote: CollectionNote;

  constructor(
    private service: CollectionNoteService,
    public dialog:MatDialog,
    private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<AddCollectionNoteComponent>
  ) { }
  

  ngOnInit(): void {
    this.refreshForm();
      // this.createForm();
      console.log('Package Rates')
  }
  Close() {
    this.dialog.closeAll();
  }

  OnSubmit() {
    console.log('Package Rate added')
    if (this.form.valid) {
      this.collectionNote = this.form.value;
      this.service.CreateCollectionNote(this.collectionNote).subscribe(res => {
        this.refreshForm();
        this.dialogRef.close('add');
      });
    }
  }

  refreshForm() {
    this.collectionNote = {
    CollectionNoteId: 0,
    CollectionDate: '' ,
    CollectionTime:'' ,
    ClientId:0 ,
    EmployeeId:0,
    }
}}
