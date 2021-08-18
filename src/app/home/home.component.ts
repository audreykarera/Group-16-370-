import { Component, OnInit } from '@angular/core';
import { DialogRole } from '@angular/material/dialog';
import { DialogService } from '../shared/services/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: DialogService
  ) { }

  ngOnInit(): void {
  }

  yesNoDialog() {
    this.dialog
      .confirmDialog({
        title: 'Are you sure?',
        message: 'Are you sure you want to do this?',
        confirmCaption: 'Yes',
        cancelCaption: 'No',
      })
      .subscribe((yes) => {
        if (yes) console.log('The user said YES');
      });
  }

  confirmCancelDialog() {
    this.dialog
      .confirmDialog({
        title: 'Confirm Action',
        message: 'Do you want to confirm this action?',
        confirmCaption: 'Confirm',
        cancelCaption: 'Cancel',
      })
      .subscribe((confirmed) => {
        if (confirmed) console.log('The user confirmed the action');
      });
  }

}
