import { double } from "aws-sdk/clients/lightsail";

export interface Title{
    TitleId: number | null;
    TitleName: string | null;
}
export interface ExtraCollectionPrice {
    ExtraCollectionPriceId: number | null;
    ExtraPriceAmount: number | null;

}
export interface CollectionNote {
    CollectionNoteId: number | null;
    CollectionDate: Date | null;
    CollectionTime: string | null;
    ClientId: number | null;
    EmployeeId: number | null;


}
export interface PackageRate {
    PackageRateId: number | null;
    PackagePrice: number | null;
    PackagePriceDate: Date | null;
}

export interface Package {
    PackageId: number | null;
    PackageName: string | null;
    PackageDetails: string | null;
    PackagePrice: number | null;
    ServiceId: number | null;
    PackageRateId: number | null;

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

export interface Booking {
    bookingId: number|null;
    clientId : number|null;
    bookingStatusId: number| null;
    collectionNoteId: number|null;
    paymentTypeId: number|null;

    serviceId:number|null;
    bookingService:BookingServices[]|null;
}
export interface BookingServices {
    bookingId :number|null;
    serviceId : number | null;

    //Paid: boolean;
    //UnitDescription: string;
}

export interface ServicePrice{
    servicePriceId:number |null;
    ServicePriceAmount: number |null;
    ServicePriceDate:Date |null;
}

export interface Service{
    serviceId:number|null;
    serviceName:string|null;
    serviceDescription:string|null;
    servicePriceAmount:number|null;
    serviceTypeId: number|null;
    serviceTypeName:string|null;
    bookingId:number|null;
    bookingServiceId:number|null;


   // ServicePriceId:number|null;
    // LocationId : number|null;
}
export interface ServiceType{
    serviceTypeId:number | null;
    serviceTypeName: string|null;
    serviceTypeDescription:string |null;
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
  quoteId: number | null;
  issuedDate: Date | null;
  quoteDescription: string | null;
  employeeId: number | null;
  quoteStatusId: number | null;
  clientId: number | null;
}

export interface RequestedQuote{
  requestedQuoteId: number | null;
  clientId: number | null;
  requestedQuoteDescription: string | null;
  requestedQuoteDate: Date | null;
  requestedQuoteLine: RequestedQuoteLine[] | null;
}

export interface RequestedQuoteLine{
  serviceId: number | null;
  requestedQuoteId: number | null;
}

export interface QuoteLine{
 quoteLineId: number | null;
  serviceId: number | null;
  quoteId: number | null;
}

export interface QuoteStatus{
    quoteStatusId: number|null;
    quoteStatusName: string|null;
}

export interface CollectionNote{
CollectionNoteId: number |null;
ClientId: number |null;
EmployeeId:number |null;
CollectionDate: Date|null;
CollectionTime: string |null;
}


export interface PerKmRate {
  perKmRateId: number | null;
  perKmRateAmount: double | null;
  perKmRateDistance: number | null;
  perKmRateDate: Date | null;
}
export interface Client {
    clientId:number|null;
    CompanyName:string|null;
    ClientFirstName:string|null;
    ClientSurname: string|null;
    ClientEmailAddress:string|null;
}
