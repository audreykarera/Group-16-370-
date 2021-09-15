import { EditEquipmentComponent } from './../../edit-equipment/edit-equipment/edit-equipment.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Equipment } from 'src/app/models/equipment';
import { EquipmentService } from 'src/app/shared/services/equipment.service';
import { CreateEquipmentComponent } from '../../create-equipment/create-equipment/create-equipment.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface EquipmentTable {
  name: string;
  availability: boolean;
}

const ELEMENT_DATA: EquipmentTable[] = [
  { name: 'GFS Skip', availability: true },
  { name: 'Spill Kit', availability: false }
];

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit(){
  //   this.dataSource.paginator = this.paginator;
  // }

  displayedColumns: string[] = ['name', 'availability', 'edit', 'delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  equipmentList: Equipment[];
  equipment: Equipment;

  constructor(private equipmentService: EquipmentService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.readEquipment()
    // this.dataSource.paginator = this.paginator;
  }

  readEquipment() {
    this.equipmentService.getEquipments().subscribe((res) => {
      this.equipmentList = res as Equipment[];
    });
  }

  onDelete(id) {
    this.equipmentService.deleteEquipment(id).subscribe((res) => {
    });
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }


  // openAddDialog(){
  //   this.dialog.open(CreateEquipmentComponent,{height:'auto',width:'auto'});
  // }

  // openEditDialog(){
  //   this.dialog.open(EditEquipmentComponent);
  // }

  routerEditEquipment() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'};
    const dialogReference = this.dialog.open(
      EditEquipmentComponent,
      dialog
    );
  }

  routerAddEquipment() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = {add: 'yes'};
    const dialogReference = this.dialog.open(
      CreateEquipmentComponent,
      dialog
    );
  }

}
