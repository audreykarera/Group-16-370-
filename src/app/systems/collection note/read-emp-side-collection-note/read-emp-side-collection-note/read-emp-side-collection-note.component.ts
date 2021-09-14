import { AddCollectionNoteComponent } from './../../add-collection-note/add-collection-note/add-collection-note.component';
import { ViewEmpSideCollectionNoteComponent } from './../../view-emp-side-collection-note/view-emp-side-collection-note/view-emp-side-collection-note.component';
import { EditEmpSideCollectionNoteComponent } from './../../edit-emp-side-collection-note/edit-emp-side-collection-note/edit-emp-side-collection-note.component';
import { EmployeeSideCollectionNoteComponent } from './../../employee-side-collection-note/employee-side-collection-note.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface EmpSideCollectionNoteTable {
  collectionNoteNum: number;
  service: string;
  servicetype: string;
  date: string;
}

const ELEMENT_DATA: EmpSideCollectionNoteTable[] = [
  {collectionNoteNum: 1, service: 'Collection & Disposal', servicetype: 'Oil', date: '2021/09/11'},
  {collectionNoteNum: 2, service: 'Cleaning', servicetype: 'Toilets', date: '2021/09/10'},
]

@Component({
  selector: 'app-read-emp-side-collection-note',
  templateUrl: './read-emp-side-collection-note.component.html',
  styleUrls: ['./read-emp-side-collection-note.component.scss']
})
export class ReadEmpSideCollectionNoteComponent implements OnInit {

  displayedColumns: string[] = ['collectionNoteNum', 'service', 'servicetype', 'date', 'edit','view'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddDialog(){
    this.dialog.open(EmployeeSideCollectionNoteComponent,{height:'auto',width:'auto'});
  }

  openEditDialog(){
    this.dialog.open(EditEmpSideCollectionNoteComponent,{height:'auto',width:'auto'});
  }

  openViewDialog(){
    this.dialog.open(ViewEmpSideCollectionNoteComponent,{height:'auto',width:'auto'});
  }

  // routerAddCollectionNote() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   const dialogReference = this.dialog.open(
  //     EmployeeSideCollectionNoteComponent,
  //     dialogConfig
  //   );
  // }
  // routerEditCollectionNote() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   const dialogReference = this.dialog.open(
  //     EditEmpSideCollectionNoteComponent,
  //     dialogConfig
  //   );
  // }
  // routerViewCollectionNote() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   const dialogReference = this.dialog.open(
  //     ViewEmpSideCollectionNoteComponent,
  //     dialogConfig
  //   );
  // }



}
