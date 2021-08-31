import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/models/titles';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.scss']
})
export class AddTitleComponent implements OnInit {
  
  titles: Title
  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.refreshForm()
  }

  onSave(){
    this.titleService.postTitle(this.titles).subscribe((res)=>{
      this.titles = res as Title; 
    })
  }

  refreshForm(){
    this.titles = {
    TitleId: 0,
    TitleDescription: ''
   
    }

}}

