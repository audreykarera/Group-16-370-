import { ExtraCollection } from './../systems/extra-collection/read-extra-collection/read-extra-collection.component';
export interface Title{
    TitleId: number | null;
    TitleName: string | null;
}
export interface ExtraCollectionPrice {
    ExtraCollectionPriceId: number | null;
    ExtraPriceAmount: string | null;

}
export interface PackageRate {
    PackageRateId: number | null;
    PackageRatePrice: number | null;
    PackagePriceDate: string | null;
}

export interface Package {
    PackageId: number | null;
    PackageName: string | null;
    PackageDetails: string | null;
    PackagePrice: string | null;
    ExtraCollection: boolean | null;
    ExtraPriceAmount: number | null;
    ServiceName: string | null;

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
    ServicePriceAmount: number |null;
    ServicePriceDate:string |null;
}

export interface Service{
    ServiceId:number|null;
    ServiceName:string|null;
    ServiceDescription:string|null;
    ServiceTypeId: number|null;
    ServicePriceId:number|null;
    // LocationId:number|null;
    // ServiceType: ServiceType[];
    // ServicePrice:ServicePrice[];
    // Location : Location[];
}

export interface Booking {
    BookingId: number|null;
    ClientId : number|null;
    BookingStatusId: number| null;
    CollectionNoteId: number|null;
    PaymentTypeId: number|null;
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

export interface Quote{
  QuoteId: number | null;
  IssuedDate: Date | null;
  QuoteDescription: string | null;
  EmployeeId: number | null;
  QuoteStatusId: number | null;
  ClientId: number | null;
}

export interface RequestedQuote{
  RequestedQuoteId: number | null;
  RequestedQuoteDescription: string | null;
  RequestedQuoteDate: Date | null;
  CompanyName: string | null;
  ClientEmailAddress: string | null;
}

export interface QuoteLine{
  QuoteLineId: number | null;
  ServiceName: string | null;
  QuoteDescription: string | null;
  IssuedDate: string | null;
}

export class QuoteStatus{
    QuoteStatusId: number|null;
    QuoteStatusName: string|null;
}
