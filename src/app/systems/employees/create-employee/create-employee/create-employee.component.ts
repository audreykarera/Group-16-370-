import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeTitle } from 'src/app/models/employeeTitle';
import { EmployeeType } from 'src/app/models/employeeType';
import { Title } from '@angular/platform-browser';
import { EmploymentStatus } from 'src/app/models/employmentstatus';
import { UserRole } from 'src/app/models/userRole';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { EmployeeTypeService } from 'src/app/shared/services/employee-type.service';
import { TitleService } from 'src/app/shared/services/title.service';
import { EmploymentStatusService } from 'src/app/shared/services/employment-status.service';
import { UserRoleService } from 'src/app/shared/services/user-role.service';
import { MustMatch } from '../../must-math.validator';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  form: FormGroup;
  
  employeeList: Employee[];
  employee: Employee; 

  titleList: EmployeeTitle[];
  title: Title; 
  titleLable: string = '';

  typeList: EmployeeType[];
  type: EmployeeType;

  statusList: EmploymentStatus[];
  status: EmploymentStatus; 

  userRoleList: UserRole[];
  userRole: UserRole;

  selectedTitle: number;
  selectedType: number; 
  selectedRole: number; 

  constructor(public dialog: MatDialog, 
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService, 
    private userRoleService: UserRoleService,
    private titleService: TitleService, 
    private employmentstatusService: EmploymentStatusService,
    private employeeTypeService: EmployeeTypeService) { }

  ngOnInit(): void {
    this.readUserRoles();
    this.readTitles();
    this.readEmployeeType();
    this.resetObject();
  }

  readUserRoles() {
    this.userRoleService.getUserRoles().subscribe((res) => {
      this.userRoleList = res as UserRole[];
      console.log(this.userRoleList);
    });
  }

  readEmployeeType(){
    this.employeeTypeService.getEmployeeType().subscribe((res)=>{
      this.typeList = res as EmployeeType[];
    })
  }

  readTitles(){
    this.titleService.getTitles().subscribe((res)=>{
      this.titleList = res as EmployeeTitle[];
      console.log(this.titleList);
    }); 
  }

  onSubmit(){
    this.employeeService.postEmployee(this.employee).subscribe((res)=>{
      this.employee = res as Employee; 
    })
    console.log(this.employee);
  }


  resetObject() {
    this.employee = {
      EmployeeId: 0,
      EmployeeFirstName: '',
      EmployeeMiddleName: '',
      EmployeeSurname: '',
      EmployeeEmailAddress:'',
      EmployeeCellPhoneNumber: '',
      EmployeeEmergencyContactFirstName: '', 
      EmployeeEmergencyContactSurname: '', 
      EmployeeEmergencyContactNumber: '',
      EmployeeIdNumber: '', 
      EmployeePassword: '',
      Username: '',
      TitleId: 0,
      EmploymentStatusId: 0, 
      EmployeeTypeId: 0, 
      UserRoleId: 0
    }
  }

  // formOptions: AbstractControlOptions = {validators: MustMatch('password', 'confirmPassword')}; 
  //  createForm(){
  //    this.form = this.formBuilder.group({
  //     EmployeeFirstName: new FormControl(
  //       this.employee.EmployeeFirstName, 
  //       Validators.compose([
  //         Validators.maxLength(50), 
  //         Validators.minLength(3),
  //         Validators.required
  //       ])
  //     ), 
  //     EmployeeSurname: new FormControl(
  //       this.employee.EmployeeSurname, 
  //       Validators.compose([
  //         Validators.maxLength(50),
  //         Validators.minLength(3), 
  //         Validators.required
  //       ])
  //     ), 
  //     EmployeeMiddleName: new FormControl(
  //       this.employee.EmployeeMiddleName, 
  //       Validators.compose([
  //         Validators.maxLength(50)
  //       ])
  //     ), 
  //     EmployeeEmailAddress: new FormControl(
  //       this.employee.EmployeeEmailAddress, 
  //       Validators.compose([
  //         Validators.maxLength(50),
  //         Validators.minLength(3),
  //         Validators.required, 
  //         Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  //       ])
  //     ),
  //     EmployeeCellPhoneNumber: new FormControl(
  //       this.employee.EmployeeCellPhoneNumber, 
  //       Validators.compose([
  //         Validators.maxLength(15),
  //         Validators.minLength(7),
  //         Validators.required
  //       ])
  //     ), 
  //     EmployeeEmergencyContactFirstName: new FormControl(
  //       this.employee.EmployeeEmergencyContactFirstName,
  //       Validators.compose([
  //         Validators.required, 
  //         Validators.maxLength(50),
  //         Validators.minLength(3)
  //       ])
  //     ), 
  //     EmployeeEmergencyContactSurname: new FormControl(
  //       this.employee.EmployeeEmergencyContactSurname,
  //       Validators.compose([
  //         Validators.maxLength(50), 
  //         Validators.minLength(3),
  //         Validators.required
  //       ])
  //     ), 
  //     EmployeeEmergencyContactNumber: new FormControl(
  //       this.employee.EmployeeEmergencyContactNumber, 
  //       Validators.compose([
  //         Validators.required, 
  //         Validators.minLength(7),
  //         Validators.maxLength(15)
  //       ])
  //     ), 
  //     Title:new FormControl(
  //       this.employee.TitleId,
  //       Validators.required
  //     ),
  //     // EmploymentStatus: new FormControl(
  //     //   this.employee.EmploymentStatus, 
  //     //   Validators.required
  //     // ),
  //     EmployeeType: new FormControl(
  //       this.employee.EmployeeTypeId,
  //       Validators.required
  //     ), 
  //     UserRole: new FormControl(
  //       this.employee.UserRoleId,
  //       Validators.required
  //     ),
  //     EmployeeIdNumber: new FormControl(
  //       this.employee.EmployeeIdNumber,
  //       Validators.compose([
  //       Validators.required, 
  //       Validators.maxLength(15),
  //       Validators.minLength(13)
  //       ])
  //     ), 
  //     EmployeeUserName: new FormControl(
  //       this.employee.Username,
  //       Validators.compose([
  //       Validators.required, 
  //       Validators.maxLength(15),
  //       Validators.minLength(3)
  //       ])
  //     ),
  //     EmployeePassword: new FormControl(
  //       this.employee.EmployeePassword,
  //       Validators.compose([
  //         Validators.required,
  //         Validators.maxLength(50),
  //         Validators.minLength(5)
  //       ])
  //     ), 
  //    });
  //  }

}