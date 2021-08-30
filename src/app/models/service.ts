import { ServicePrice } from "./servicePrice";
import { ServiceType } from "./serviceType";
import {Location} from "./location";

export class Service {
   ServiceId: number;
   ServiceName: string;
   ServiceDescription: string;
   ServiceType: ServiceType[]; 
   Location : Location[];
   ServicePrice: ServicePrice[];
}