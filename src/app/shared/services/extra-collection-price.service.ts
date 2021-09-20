
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExtraCollectionPrice } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class ExtraCollectionPriceService {
  UpdateExtraCollection(extracollectionPrice: ExtraCollectionPrice) {
    throw new Error('Method not implemented.');
  }
  apiUrl = 'http://localhost:60000/api/extracollectionprice'
  

  constructor(
    private http: HttpClient
  ) { }

  getExtraCollectionPrices(): Observable<ExtraCollectionPrice[]> {
    return this.http.get<ExtraCollectionPrice[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }
  getExtraCollectionPrice(id: number): Observable<ExtraCollectionPrice[]> {
    return this.http.get<ExtraCollectionPrice[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }
  UpdatePrice(price:ExtraCollectionPrice) {
    return this.http.put(`${this.apiUrl}/${price.ExtraCollectionPriceId}`, price)
      .pipe(map(res => res));
  }
  CreatePrice(price: ExtraCollectionPrice): Observable<any> {
    return this.http.post(`${this.apiUrl}`, price)
      .pipe(map(res => res));
  }
  DeletePrice(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }
}
