import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PaymentTypeService {
  apiUrl = "http://localhost:60000/api/paymenttype/";
  constructor(
    private http: HttpClient
  ) { }

  getPaymentTypes() {
    return this.http.get(this.apiUrl + 'getpaymenttypes/');
  }

  getPaymentTypeId(id) {
    return this.http.get(this.apiUrl + 'getpaymenttype' + id);
  }

  patchPaymentType(obj) {
    return this.http.patch(this.apiUrl + 'updatepaymenttype/', obj);
  }

  postPaymentType(obj) {
    return this.http.post(this.apiUrl + 'createpaymenttype/', obj);
  }

  deletePaymentType(id) {
    return this.http.delete(this.apiUrl + 'deletepaymenttype' + id);
  }
  
  getPaymentTypeByName(name){
    return this.http.get(this.apiUrl + 'getpaymenttypename' + name); 
  }

}



