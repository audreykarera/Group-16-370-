export interface Title{
    TitleId: number | null; 
    TitleName: string | null;
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