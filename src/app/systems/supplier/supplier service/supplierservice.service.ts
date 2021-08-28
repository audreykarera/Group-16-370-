import { Suppliers } from './../../../Interfaces/dialog.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierserviceService {

  SERVER_URL ="http://localhost:60000/api/supplier"
  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<Suppliers[]> {
    return this.http.get<Suppliers[]>(`${this.SERVER_URL}/getsuppliers`);
  }
}
