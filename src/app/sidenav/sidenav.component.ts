import { Component, OnInit } from '@angular/core';

interface side {
  value: string;
  viewValue: string;
}

interface admin {
  value: string;
  viewValue: string;
}

interface employee {
  value: string;
  viewValue: string;
}

interface client {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  side: side[] = [
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'Employee', viewValue: 'Employee'},
    {value: 'Client', viewValue: 'Client'}, 
  ];  

  isSelected: boolean=false; 
  Admin: Boolean | undefined;
  Employee: Boolean | undefined;
  Client: Boolean | undefined;

  get(data: { value: string; }){
    this.isSelected = true; 
    if(data.value == 'Admin'){
      this.Admin = true;
      this.Employee = false; 
      this.Client = false; 
    } else if (data.value == 'Employee'){
      this.Admin = false;
      this.Employee = true;
      this.Client = false; 
    } else if(data.value =='Client'){
      this.Admin = false;
      this.Employee = false;
      this.Client = true;  
    }
    else{
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
