import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-create-servicetype',
  templateUrl: './create-servicetype.component.html',
  styleUrls: ['./create-servicetype.component.scss']
})
export class CreateServicetypeComponent implements OnInit {
  MatDialog: any;


  constructor(private HttpClient:HttpClient,
    public dialog: MatDialog) { }
  
  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    const url = 'http://localhost:60000/api/servicetype/getservicetype/createservicetype';
    this.HttpClient.post(url, f.value).subscribe((result) =>{
      this.ngOnInit();
    });

  }
}