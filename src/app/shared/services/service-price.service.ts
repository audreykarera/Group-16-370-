import { Observable } from 'rxjs';
import { ServicePrice } from './../../models/servicePrice';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicePriceService {
  apiUrl="http://localhost:60000/api/serviceprice/";
  constructor(private http:HttpClient) { }

  getServicePrices():Observable<ServicePrice[]>{
    console.log(`${this.apiUrl}getserviceprice`)
    return this.http.get<ServicePrice[]>(`${this.apiUrl}getserviceprice`).pipe(map(res=>res));
  }
}
