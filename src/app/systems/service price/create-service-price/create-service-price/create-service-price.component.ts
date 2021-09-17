import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-create-service-price',
  templateUrl: './create-service-price.component.html',
  styleUrls: ['./create-service-price.component.scss']
})
export class CreateServicePriceComponent implements OnInit {

  constructor(
    public dialog:MatDialog,
    private notificationService:NotificationsService,
    public router:Router) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialog.closeAll();
  }

}
