
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PaymentType } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})

export class PaymentTypeService {
  apiUrl = "http://localhost:60000/api/paymenttype";
  constructor(
    private http: HttpClient
  ) { }

  getPaymentTypes(): Observable<PaymentType[]> {
    return this.http.get<PaymentType[]>(`${this.apiUrl}`)
    .pipe(map(res => res));
  }

  getPaymentType(id: number): Observable<PaymentType[]> {
    return this.http.get<PaymentType[]>(`${this.apiUrl}/${id}`)
    .pipe(map(res => res));
  }

  UpdatePaymentType(paymentType: PaymentType){
    return this.http.put(`${this.apiUrl}/${paymentType.PaymentTypeId}`, paymentType)
    .pipe(map(res => res));
  }

  CreatePaymentType(paymentType: PaymentType): Observable<any> {
    return this.http.post(`${this.apiUrl}`, paymentType)
    .pipe(map(res => res));
  }

  DeletePaymentType(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`)
    .pipe(map(res => res));
  }

}
