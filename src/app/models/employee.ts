import { EmployeeTitle } from "./employeeTitle";
import { EmployeeType } from "./employeetype";
import { EmploymentStatus } from "./employmentstatus";
import { UserRole } from "./userRole";

export class Employee {
    EmployeeId?: number;  
    EmployeeFirstName?: string; 
    EmployeeSurname?: string; 
    EmployeeMiddleName?: string; 
    EmployeeCellPhoneNumber?: string; 
    EmployeeEmailAddress?: string; 
    EmployeeIdNumber?: string; 
    EmployeeEmergencyContactNumber?: string; 
    EmployeeEmergencyContactFirstName?: string; 
    EmployeeEmergencyContactSurname?: string; 
    EmployeePassword?: string;
    Username?: string;
    TitleId?: number;
    EmploymentStatusId?:number;
    EmployeeTypeId?:number;
    UserRoleId?: number; 
}

const employee: Employee = {};