import { ServicePrice } from "./servicePrice";

import {Location} from "./location";

export interface Service {
   ServiceId: number;
   ServiceName: string;
   ServiceDescription: string;
 
   Location : Location[];
   ServicePrice: ServicePrice[];
}