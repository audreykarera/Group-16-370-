import { Title } from "@angular/platform-browser";
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
    Title?: Title; 
    EmploymentStatusId?:number;
    EmploymentStatus?: EmploymentStatus;
    EmployeeTypeId?:number;
    EmployeeType?: EmployeeType;
    UserRoleId?: number; 
    UserRole?: UserRole;
}