export interface Title{
    TitleId: number | null;
    TitleName: string | null;
}

export interface EmployeeType{
    EmployeeTypeId: number | null;
    EmployeeTypeName: string | null;
}

export interface EmploymentStatus{
    EmploymentStatusId: number | null;
    EmploymentStatusName: string | null;
}

export class Employee {
    EmployeeId: number | null;  
    EmployeeFirstName: string | null; 
    EmployeeSurname: string | null; 
    EmployeeMiddleName: string | null; 
    EmployeeCellPhoneNumber: string | null; 
    EmployeeEmailAddress: string | null; 
    EmployeeIdNumber: string | null; 
    EmployeeEmergencyContactNumber: string | null; 
    EmployeeEmergencyContactFirstName: string | null; 
    EmployeeEmergencyContactSurname: string | null; 
    TitleId: number | null; 
    EmploymentStatusId: number | null; 
    EmployeeTypeId: number | null; 
}

export interface DateTimeSlot{
    DateTimeSlotId: number | null;
    Date: Date | null; 
    StartTime: string | null; 
    EndTime: string | null;
}

export interface EmployeeDateTimeSlot{
    EmployeeDateTimeSlotId: number | null; 
    EmployeeId: number | null; 
    DateTimeSlotId: number | null; 
    EquipmentId: number | null; 
    VehicleId: number | null; 
    SlotStatusId: number | null;
}

export interface Complaint{
    ComplaintId: number | null;
    ComplaintDescription: string | null; 
    ComplaintDate: string | null; 
    Rating: number | null;
}
export interface PaymentType{
  PaymentTypeId: number | null;
  PaymentTypeName: string | null;
}

export interface SlotStatus {
  SlotStatusId: number | null;
  SlotStatusName: string | null;
}

export interface Equipment {
  EquipmentId: number | null;
  EquipmentName: string | null;
  EquipmentAvailable: boolean | null;
}
export interface ServiceType{
    ServiceTypeId:number | null;
    ServiceTypeName: string|null;
    ServiceTypeDescription:string |null;
}

export interface ServicePrice{
    ServicePriceId:number |null;
    ServicePriceAmount: string|null;
    ServicePriceDate:string |null;
}

export interface Service{
    ServiceId:number|null;
    ServiceName:string|null;
    ServiceDescription:string|null;
    // ServiceType: ServiceType[];
    // ServicePrice:ServicePrice[];
    // Location : Location[];
    ServiceTypeId: number|null;
    ServicePriceId:number|null;
    LocationId:number|null;
}

export interface Supplier{
    SupplierId: number |null;
    SupplierName: string|null;
    SupplierContactPersonNumber: string|null;
    SupplierContactPersonEmail:string|null
}

export interface BookingStatus{
    BookingStatusId:number|null;
    BookingStatusName:string|null;
}

export interface Vehicle{
    VehicleId: number|null;
    VehicleNumberPlate: string|null;
    VehicleMake:string|null;
    VehicleModel:string|null;
    VehicleAvailable: boolean |null;
}