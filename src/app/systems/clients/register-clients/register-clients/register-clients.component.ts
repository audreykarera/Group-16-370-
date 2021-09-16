import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

interface company {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register-clients',
  templateUrl: './register-clients.component.html',
  styleUrls: ['./register-clients.component.scss']
})
export class RegisterClientsComponent implements OnInit {
  
  companies: company[] = [
    {value: 'Yes', viewValue: 'Yes'},
    {value: 'No', viewValue: 'No'}
  ];
  isSelected: boolean=false; 
  Yes: Boolean | undefined;

  get(data: { value: string; }){
    this.isSelected = true; 
    if(data.value == 'Yes'){
      this.Yes = true;
    } else if(data.value =='No'){
      this.isSelected = false;
      this.Yes = false;
    }
    else{
    }
  }
      
  constructor( public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialog.closeAll();
  }

  
}
