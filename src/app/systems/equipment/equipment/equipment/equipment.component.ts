import { Observable } from 'rxjs';
import { Equipment } from 'src/app/Interfaces/Index';
import { EditEquipmentComponent } from './../../edit-equipment/edit-equipment/edit-equipment.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { EquipmentService } from 'src/app/shared/services/equipment.service';
import { CreateEquipmentComponent } from '../../create-equipment/create-equipment/create-equipment.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { NotificationsService } from 'src/app/shared/services/notifications.service';


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  equipmentList: Equipment[] = [];
  equipment$: Observable<Equipment[]> = this.service.getEquipments();
  equipment: Equipment;

  displayedColumns: string[] = ['name', 'availability', 'edit', 'delete'];
  public dataSource = new MatTableDataSource<any>();



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public myFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLowerCase();
    console.log(this.dataSource.filter);
  }

  constructor(
    public dialog: MatDialog,
    private service: EquipmentService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.GetEquipments();
    this.refreshForm();
  }

  refreshForm() {
    this.equipment = {
      EquipmentId: 0,
      EquipmentName: '',
      EquipmentAvailable: true
    }
  }

  Close() {
    this.dialog.closeAll();
  }

  GetEquipments() {
    this.equipment$.subscribe(res => {
      if (res) {
        this.equipmentList = res;
        console.log(res);
      }
    });
  }

  DeleteEquipment(id) {
    console.log(id);
    this.service.DeleteEquipment(id).subscribe((res) => {
      this.notificationsService.successToaster('Equipment Deleted', 'Success');
      this.GetEquipments();
    });
  }

  routerEditEquipment(equipmentId: number, equipmentName: string, equipmentAvailable: boolean) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = { add: 'yes' };
    const dialogReference = this.dialog.open(
      EditEquipmentComponent,
      {
        data: { equipmentId: equipmentId, equipmentName: equipmentName, equipmentAvailable: equipmentAvailable }
      }
    );

    dialogReference.afterClosed().subscribe((res) => {
      if (res == 'add') {
        this.notificationsService.successToaster('Equipment Description editied', 'Success');
        this.GetEquipments();
      }
    });
  }

  routerAddEquipment() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = { add: 'yes' };
    const dialogReference = this.dialog.open(
      CreateEquipmentComponent,
      dialog
    );

    dialogReference.afterClosed().subscribe((res) => {
      if (res == 'add') {
        this.notificationsService.successToaster('Equipment Added', 'Success');
        this.GetEquipments();
      }
    });
  }

}
