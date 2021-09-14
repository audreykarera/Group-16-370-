import { EmployeeType } from './../../../models/employeeType';
import { Component,Inject, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeTypeService } from 'src/app/shared/services/employee-type.service';
import { AddEmployeeTypeComponent } from '../add-employee-type/add-employee-type/add-employee-type.component';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { EditEmployeeTypeComponent } from '../edit-employee-type/edit-employee-type/edit-employee-type.component';
import { MatTableDataSource } from '@angular/material/table';

export interface EmployeeTypeTable {
  typename: string;
  employeetypeid: number;
} 

const ELEMENT_DATA: EmployeeTypeTable[] = [
  {employeetypeid: 1, typename: 'Driver'},

];

@Component({
  selector: 'app-view-employee-type',
  templateUrl: './view-employee-type.component.html',
  styleUrls: ['./view-employee-type.component.scss']
})
export class ViewEmployeeTypeComponent implements OnInit {
  // employeeTypeList: EmployeeType[];
  // employeeType: EmployeeType;

  displayedColumns: string[] = ['employeetypeid', 'typename', 'edit', 'delete'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  constructor(
    public employeeTypeService: EmployeeTypeService,
    private notificationsService: NotificationsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    //this.readEmployeeTypes();
  }
  Close(){
    this.dialog.closeAll();
  }
  
  // readEmployeeTypes(){
  //   console.log(this.employeeTypeList);
  //   this.employeeTypeService.getEmployeeType().subscribe((res) => {
  //     this.employeeTypeList = res as EmployeeType[];
  //     console.log(this.employeeTypeList);
  //   });
  // }
  //   onDelete(id){
  //     this.employeeTypeService.deleteEmployeeType(id).subscribe((res)=>{
  //       console.log(id);
  //       this.readEmployeeTypes();
  //     });this.Close();
  //     this.notificationsService.successToaster("Employee Type deleted", "Success");
  //     setTimeout(()=>{
  //       window.location.reload();
  //     }, 1000);
  // }

  routerEditEmployeeTypes(employeeTypeId: number, employeeTypeName: string) {
    console.log(employeeTypeId, employeeTypeName);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogReference = this.dialog.open(
      
      EditEmployeeTypeComponent,
      {
        disableClose: true,
        data: {
          employeeTypeId, 
          employeeTypeName
        }
      }
    );

  }
  routerAddEmployeeTypes() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    width: 'auto';
    length: 'auto';
    const dialogReference = this.dialog.open(
      AddEmployeeTypeComponent,
      dialogConfig
    );
  }
}

