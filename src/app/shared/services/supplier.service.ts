import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Supplier } from 'src/app/models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  apiUrl = 'http://localhost:60000/api/supplier/';
  constructor(
    private http: HttpClient
  ) { }

  getSuppliers(){
    return this.http.get(this.apiUrl + 'getsuppliers/');
  }

  postSupplier(obj){
    return this.http.post(this.apiUrl + 'createsupplier/', obj);
  }

  deleteSupplier(id){
    return this.http.delete(this.apiUrl + 'deletesupplier' + id);
  }
}
