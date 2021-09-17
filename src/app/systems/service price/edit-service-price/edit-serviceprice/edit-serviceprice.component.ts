import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-edit-serviceprice',
  templateUrl: './edit-serviceprice.component.html',
  styleUrls: ['./edit-serviceprice.component.scss']
})
export class EditServicepriceComponent implements OnInit {

  constructor(public dialog:MatDialog,
    private notificationService:NotificationsService,
    public router:Router) { }

  ngOnInit(): void {
  }
  Close(){
    this.dialog.closeAll();
  }

}
