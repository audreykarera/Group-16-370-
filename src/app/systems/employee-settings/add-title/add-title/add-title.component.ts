import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from 'src/app/models/titles';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.scss']
})
export class AddTitleComponent implements OnInit {
  
  titles: Title
  constructor(
    private titleService: TitleService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.refreshForm()
  }

  Close(){
    this.dialog.closeAll();
  }

  onSave(){
    this.titleService.postTitle(this.titles).subscribe((res)=>{
      this.titles = res as Title; 
    });
    this.Close();
    this.notificationsService.successToaster("New Title added", "Success");
    setTimeout(()=>{
      window.location.reload();
    }, 1000);
  }

  refreshForm(){
    this.titles = {
    TitleId: 0,
    TitleDescription: ''
   
    }
}}

