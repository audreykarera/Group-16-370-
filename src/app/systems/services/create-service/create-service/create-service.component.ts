import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

interface service{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {


  onSubmit(form:any) {
    console.log(form.value!)
  }

  services: service[] = [
    {value: 'complaints-0', viewValue: 'Collection'},
    {value: 'users-1', viewValue: 'Delivery'},
    {value: 'collection-2', viewValue: 'Removal'}, 
  ];
  formGroup!: FormGroup;
  constructor(public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

}
