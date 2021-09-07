import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
} 

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'}
];

@Component({
  selector: 'app-read-extra-collection',
  templateUrl: './read-extra-collection.component.html',
  styleUrls: ['./read-extra-collection.component.scss']
})
export class ReadExtraCollectionComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
