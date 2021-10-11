import { PerKmRate } from './../../Interfaces/Index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerKmRateService {

  apiUrl = 'http://localhost:60000/api/perkmrate';
  constructor(private http: HttpClient) { }

  getPerKmRates(): Observable<PerKmRate[]> {
    return this.http.get<PerKmRate[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  getPerKmrate(id: number): Observable<PerKmRate[]> {
    return this.http.get<PerKmRate[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }


  UpdatePerKmRate(perKmRate: PerKmRate) {
    return this.http.put(`${this.apiUrl}/${perKmRate.perKmRateId}`, perKmRate)
      .pipe(map(res => res));
  }

 CreatePerKmRate(perKmRate: PerKmRate): Observable<any> {
   return this.http.post(`${this.apiUrl}`, perKmRate)
   .pipe(map(res => res));
 }

  DeletePerKmRate(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }
}
