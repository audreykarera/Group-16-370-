import { EmployeeType } from 'src/app/Interfaces/Index';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeTypeService } from 'src/app/shared/services/employee-type.service';
import { AddEmployeeTypeComponent } from '../add-employee-type/add-employee-type/add-employee-type.component';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { EditEmployeeTypeComponent } from '../edit-employee-type/edit-employee-type/edit-employee-type.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-employee-type',
  templateUrl: './view-employee-type.component.html',
  styleUrls: ['./view-employee-type.component.scss']
})
export class ViewEmployeeTypeComponent implements OnInit {

  employeeTypeList: EmployeeType[] = [];
  employeeType$: Observable<EmployeeType[]> = this.service.getEmployeeTypes();
  employeeType: EmployeeType;

  displayedColumns: string[] = ['typename', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.employeeTypeList);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private service: EmployeeTypeService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.GetEmployeeTypes();
    this.refreshForm();
  }

  refreshForm() {
    this.employeeType = {
      EmployeeTypeId: 0,
      EmployeeTypeName: ''
    }
  }

  Close() {
    this.dialog.closeAll();
  }

  GetEmployeeTypes() {
    this.employeeType$.subscribe(res => {
      if (res) {
        this.employeeTypeList = res;
        console.log(res);
      }
    });
  }

  DeleteEmployeeType(id) {
    console.log(id);
    this.service.DeleteEmployeeType(id).subscribe((res) => {
      this.notificationsService.successToaster('Employee Type Deleted', 'Success');
      this.GetEmployeeTypes();
    });

  }


  routerEditEmployeeType(employeeTypeId: number, employeeTypeName: string) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto',
      dialog.data = { add: 'yes' }
    const dialogReference = this.dialog.open(
      EditEmployeeTypeComponent,
      {
        data: { employeeTypeId: employeeTypeId, employeeTypeName: employeeTypeName }
      });

    dialogReference.afterClosed().subscribe((res) => {
      if (res == 'add') {
        this.notificationsService.successToaster('Employee Type Edited', 'Success');
        this. GetEmployeeTypes()
      }
    });
  }

  routerAddEmployeeType() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto',
      dialog.data = { add: 'yes' }
    const dialogReference = this.dialog.open(
      AddEmployeeTypeComponent,
      dialog
    );

    dialogReference.afterClosed().subscribe((res) => {
      if (res == 'add') {
        this.notificationsService.successToaster('Employee Type Added', 'Success');
        this.GetEmployeeTypes();
      }
    });
  }
}

