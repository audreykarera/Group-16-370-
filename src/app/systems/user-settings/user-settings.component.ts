
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { UserRoleService } from 'src/app/shared/services/user-role.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface UserSettingsTable {
  userid: number;
  userrole: string;
} 

const ELEMENT_DATA: UserSettingsTable[] = [
  {userid: 1, userrole: 'Admin'},
  
];


@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  // userRoleList: UserRole[];
  // userRole: UserRole;

  displayedColumns: string[] = ['userid', 'userrole', 'edit', 'delete'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 
  
  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {


  }


}
