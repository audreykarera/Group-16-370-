import { Title } from "@angular/platform-browser";
import { EmployeeType } from "./employeetype";
import { EmploymentStatus } from "./employmentstatus";
import { UserRole } from "./userRole";

export class Employee {
    EmployeeId: number;  
    EmployeeFirstName: string; 
    EmployeeSurname: string; 
    EmployeeMiddleName: string; 
    EmployeeCellPhoneNumber: number; 
    EmployeeEmailAddress: string; 
    EmployeeIdNumber: number; 
    EmployeeEmergencyContactNumber: number; 
    EmployeeEmergencyContactFirstName: string; 
    EmployeeEmergencyContactSurname: number; 
    Title: Title[];
    EmploymentStatus:EmploymentStatus[];
    EmployeeType:EmployeeType[];
    UserRole: UserRole[]
}