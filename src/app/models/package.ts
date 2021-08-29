import { ExtraCollectionPrice } from './extraCollectionPrice';
import { PackageRate } from './packageRate';
import { Service } from "./service";

export class Package {
    PackageId: number;
    PackageName: string;
    //PackagePrice: number;
    PackageDetails:string;
    ExtraCollection: boolean;
    Service: Service[];
    ExtraCollectionPrice: ExtraCollectionPrice[];
    PackageRate: PackageRate[];   

}