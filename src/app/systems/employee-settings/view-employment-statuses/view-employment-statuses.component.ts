import { EditEmploymentStatusComponent } from './../edit-employment-status/edit-employment-status/edit-employment-status.component';
import { EmploymentStatusService } from './../../../shared/services/employment-status.service';
import { AddEmploymentStatusComponent } from './../add-employment-status/add-employment-status/add-employment-status.component';
import { EmploymentStatus } from 'src/app/Interfaces/Index';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-employment-statuses',
  templateUrl: './view-employment-statuses.component.html',
  styleUrls: ['./view-employment-statuses.component.scss']
})
export class ViewEmploymentStatusesComponent implements OnInit {

  employmentStatusList: EmploymentStatus[] = [];
  employmentStatus$: Observable<EmploymentStatus[]> = this.service.getEmploymentStatuses();
  employmentStatus: EmploymentStatus;


  displayedColumns: string[] = ['employementstatusname', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.employmentStatusList);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialog: MatDialog,
    private service: EmploymentStatusService,
    private notificationsService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.refreshForm();
    this.GetEmploymentStatus();
  }

  refreshForm() {
    this.employmentStatus = {
      EmploymentStatusId: 0,
      EmploymentStatusName: ''
    }
  }

  Close() {
    this.dialog.closeAll();
  }

  GetEmploymentStatus() {
    this.employmentStatus$.subscribe(res => {
      if (res) {
        this.employmentStatusList = res;
        console.log(res);
      }
    });
  }

  DeleteEmploymentStatus(id) {
    console.log(id);
    this.service.DeleteEmploymentStatus(id).subscribe((res) => {
      this.notificationsService.successToaster('Employment Status Deleted', 'Success');
      this.GetEmploymentStatus();
    });

  }

  routerEditEmploymentStatuses(employmentStatusId: number, employmentStatusName: string) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto',
      dialog.data = { add: 'yes' }
    const dialogReference = this.dialog.open(
      EditEmploymentStatusComponent,
      {
        data: { employmentStatusId: employmentStatusId, employmentStatusName: employmentStatusName }
      });

    dialogReference.afterClosed().subscribe((res) => {
      if (res == 'add') {
        this.notificationsService.successToaster('Employment Status Edited', 'Success');
        this.GetEmploymentStatus();
      }
    });
  }


  routerAddEmploymentStatus() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto',
      dialog.data = { add: 'yes' }
    const dialogReference = this.dialog.open(
      AddEmploymentStatusComponent,
      dialog
    );

    dialogReference.afterClosed().subscribe((res) => {
      if (res == 'add') {
        this.notificationsService.successToaster('Employment Status Added', 'Success');
        this.GetEmploymentStatus();
      }
    });
  }

}
