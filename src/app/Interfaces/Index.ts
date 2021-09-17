export interface Title{
    TitleId: number | null; 
    TitleName: string | null;
}

export interface ServiceType{
    ServiceTypeId:number | null;
    ServiceTypeName: string|null;
    ServiceTypeDescription:string |null;
}

export class Supplier{
    SupplierId: number | null; 
    SupplierName: string | null; 
    SupplierContactPersonNumber: string | null;
    SupplierContactPersonEmail: string | null;
}

export class BookingStatus{
    BookingStatusId: number | null;
    BookingStatusName: string |null;
}

export class Vehicle{
    VehicleId: number |null;
      VehicleNumberPlate: string | null;
      VehicleMake: string |null;
      VehicleModel: string | null;
      VehicleAvailable: boolean |null;
}

