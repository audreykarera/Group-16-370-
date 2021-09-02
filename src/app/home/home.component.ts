import { Component, OnInit } from '@angular/core';
import { DialogRole, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from '../shared/services/dialog.service';
import { ShowEstimateComponent } from '../systems/estimate-costing/show-estimate/show-estimate/show-estimate.component';

interface service {
  value: string;
  viewValue: string;
}

interface recyclable {
  value: string;
  viewValue: string;
}

interface deliverable {
  value: string;
  viewValue: string;
}

  interface apackage {
    value: string;
    viewValue: string;
}

interface removable {
  value: string;
  viewValue: string;
}

interface santisable {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  services: service[] = [
    {value: 'CollectionandDisposal', viewValue: 'Collection and Disposal'},
    {value: 'SkipService', viewValue: 'Skip Service'},
    {value: 'Delivery', viewValue: 'Delivery'},
    {value: 'Santisation', viewValue: 'Santisation'},
    {value: 'Removal', viewValue: 'Removal'},
  ];

  recyclables: recyclable[]=[
    {value: 'Used Oil', viewValue: 'Used Oil'},
    {value: 'Used Tyres', viewValue: 'Used Tyres'},
    {value: 'Scrap Metal', viewValue: 'Scarp Metal'},
    {value: 'Paper & Cardboard', viewValue: 'Paper & Cardboard'},
    {value: 'Bottles', viewValue: 'Bottles'},
    {value: 'Plastic', viewValue: 'Plastic'},
  ];

  deliverables: deliverable[]=[
    {value: 'Sand, stone & topsoil', viewValue: 'Sand, stone & topsoil'},
    {value: 'Compost & fertilizer', viewValue: 'Compost & fertilizer'},
  ];

  packages: apackage[]=[
    {value: '2 Date Rate', viewValue: '2 Day Rate'},
    {value: 'Weekend', viewValue: 'Weekend'},
    {value: 'Mid week', viewValue: 'Mid week'},
    {value: 'Full week', viewValue: 'Full week'},
    {value: 'Short Term', viewValue: 'Short Term'},
    {value: 'Long Term', viewValue: 'Long Term'},

  ];

  santisables: santisable []=[
    {value: 'options ?', viewValue: 'options ?'},
  ];

  removables: removable[]=[
    {value: 'Domestic garden waste', viewValue: 'Domestic garden waste'},
    {value: 'Domestic rubbish', viewValue: 'Domestic rubbish'},
    {value: 'Building rubble for small & medium sized construction sites', viewValue: 'Building rubble for small & medium sized construction sites'},
  ];


  isSelected: boolean=false;
  CollectionandDisposal: Boolean | undefined;
  SkipService: Boolean | undefined;
  Delivery: Boolean | undefined;
  Santisation: Boolean | undefined;
  Removal: Boolean | undefined;

  get(data: { value: string; }){
    this.isSelected = true;
    if(data.value == 'CollectionandDisposal'){
      this.CollectionandDisposal = true;
      this.SkipService = false;
      this.Delivery = false;
      this.Santisation = false;
      this.Removal = false;
    } else if (data.value == 'SkipService'){
      this.CollectionandDisposal = false;
      this.SkipService = true;
      this.Delivery = false;
      this.Santisation = false;
      this.Removal = false;
    } else if(data.value =='Delivery'){
      this.CollectionandDisposal = false;
      this.SkipService = false;
      this.Delivery = true;
      this.Santisation = false;
      this.Removal = false;
    } else if(data.value == 'Santisation'){
      this.CollectionandDisposal = false;
      this.SkipService = false;
      this.Delivery = false;
      this.Santisation = true;
      this.Removal = false;
    } else if(data.value =='Removal'){
      this.CollectionandDisposal = false;
      this.SkipService = false;
      this.Delivery = false;
      this.Santisation = false;
      this.Removal = true;
    }
    else{
    }
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  routerGenerateEstimate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      ShowEstimateComponent, dialogConfig
    );
  }

}