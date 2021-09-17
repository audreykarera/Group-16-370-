import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ServicePrice } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class ServicePriceService {
  apiUrl="http://localhost:60000/api/serviceprice";
  constructor(private http:HttpClient) { }


  getServicePrices(): Observable<ServicePrice[]> {
    return this.http.get<ServicePrice[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  getServicePrice(id: number): Observable<ServicePrice[]> {
    return this.http.get<ServicePrice[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  UpdateServicePrice(servicePrice: ServicePrice) {
    return this.http.put(`${this.apiUrl}/${servicePrice.ServicePriceId}`, servicePrice)
      .pipe(map(res => res));
  }

  CreateServicePrice(servicePrice: ServicePrice): Observable<any> {
    return this.http.post(`${this.apiUrl}`, servicePrice)
      .pipe(map(res => res));
  }

  DeleteServicePrice(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }
}
