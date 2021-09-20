
 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Supplier } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  apiUrl = 'http://localhost:60000/api/supplier';
  constructor(
    private http: HttpClient
  ) { }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  getSupplier(id: number): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  UpdateSupplier(supplier: Supplier) {
    return this.http.put(`${this.apiUrl}/${supplier.SupplierId}`, supplier)
      .pipe(map(res => res));
  }

  CreateSupplier(supplier: Supplier): Observable<any> {
    return this.http.post(`${this.apiUrl}`, supplier)
      .pipe(map(res => res));
  }

  DeleteSupplier(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  // DeleteTitle(id){
  //   return this.http.delete(`${this.apiUrl}/`+ id);
  // }


}
