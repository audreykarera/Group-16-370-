import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Title } from 'src/app/models/titles';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss']
})
export class EditTitleComponent implements OnInit {

  title:Title;

  constructor(public dialog: MatDialog,
    private titleService: TitleService,
    @Inject(MAT_DIALOG_DATA)
    public data: any) { }
  
  ngOnInit(): void {
    
    console.log(this.data);
  }

  readServiceTypes(){
    this.titleService.getTitles().subscribe((res)=>{
      this.title=res as Title;
    })
  }

  updateServiceTypes(){
    this.titleService.patchTitle(this.title).subscribe((res)=>{
      this.title=res as Title;
    })
  }
  }

