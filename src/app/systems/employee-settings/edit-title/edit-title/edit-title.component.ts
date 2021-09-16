import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss']
})
export class EditTitleComponent implements OnInit {


  constructor(public dialog: MatDialog,
    private titleService: TitleService,
    @Inject(MAT_DIALOG_DATA)
    public data: any) { }

  ngOnInit(): void {

    console.log(this.data);
  }
  Close() {
    this.dialog.closeAll();
  }

  // readTitles(){
  //   this.titleService.getTitles().subscribe((res)=>{
  //     this.title=res as Title;
  //   })
  // }


}

