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
    PackageRatePrice: string | null;
    PackagePriceDate: string | null;
}

export interface Package {
    PackageId: number | null;
    PackageName: string | null;
    PackageDetails: string | null;
    PackagePrice: string | null;
    ExtraCollection: boolean | null;
    ExtraPriceAmount: string | null;
    ServiceName: string | null; 

}