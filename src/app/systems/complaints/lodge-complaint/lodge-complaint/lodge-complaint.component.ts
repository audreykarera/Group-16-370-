import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Complaint } from 'src/app/Interfaces/Index';
import { ComplaintService } from 'src/app/shared/services/complaint.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-lodge-complaint',
  templateUrl: './lodge-complaint.component.html',
  styleUrls: ['./lodge-complaint.component.scss']
})
export class LodgeComplaintComponent implements OnInit {
  form: FormGroup;
  complaint: Complaint

  error_messages = {
    ComplaintDescription: [
      { type: 'required', message: 'Complaint description is required' },
      { type: 'maxLength', message: 'Complaint must be less than 500 characters' }
    ],
    Rating: [
      { type: 'required', message: 'Rating is required' }
    ]
  }

  constructor(
    private service: ComplaintService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.createForm();
  }

  Close() {
    this.dialog.closeAll();
  }

  createForm() {
    this.form = this.formBuilder.group({
      ComplaintDescription: new FormControl(
        this.complaint.ComplaintDescription,
        Validators.compose([
          Validators.required,
          Validators.maxLength(500)
        ])
      ),
      ComplaintDate: new FormControl(
        (new Date()).toISOString().substring(0, 10)
      ),
      Rating: new FormControl(
        this.complaint.Rating,
        Validators.compose([
          Validators.required
        ])
      )
    })
  }

  OnSubmit() {
    console.log(this.complaint);
      this.complaint = this.form.value;
      console.log(this.complaint);
      this.service.CreateComplaint(this.complaint).subscribe(res => {
        this.refreshForm();
      })
  }

  refreshForm() {
    this.complaint = {
      ComplaintId: 0,
      ComplaintDescription: '',
      ComplaintDate: '',
      Rating: 0
    }
  }
}
