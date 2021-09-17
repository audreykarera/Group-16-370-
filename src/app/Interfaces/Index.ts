export interface Title{
    TitleId: number | null; 
    TitleName: string | null;
}

export class BookingStatus{
    BookingStatusId: number | null;
    BookingStatusName: string | null;
}
export class Supplier{
    SupplierId: number | null; 
    SupplierName: string | null; 
    SupplierContactPersonNumber: string | null;
    SupplierContactPersonEmail: string | null;
}
export interface Vehicle {
    VehicleId: number | null;
    VehicleNumberPlate: string | null;
    VehicleMake: string | null;
    VehicleModel: string | null;
    VehicleAvailable: boolean | null;
  }