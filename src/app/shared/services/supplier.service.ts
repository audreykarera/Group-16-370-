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

  //Get all suppliers
  getSuppliers(){
    return this.http.get(this.apiUrl + 'getsuppliers/');
  }
//Get supplier by id
  getSupplierId(id){
    return this.http.get(this.apiUrl + 'getsupplier' + id);
  }
//Update supplier
  patchSupplier(obj){
    return this.http.patch(this.apiUrl + 'updatesupplier',obj);
  }
//Create supplier
  postSupplier(obj){
    return this.http.post(this.apiUrl + 'createsupplier/', obj);
  }
//Delete supplier
  deleteSupplier(id){
    return this.http.delete(this.apiUrl + 'deletesupplier' + id);
  }

  getSupplierByName(name){
    return this.http.get(this.apiUrl + 'getsuppliername' + name); 
  }
}
