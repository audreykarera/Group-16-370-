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


  getServicePrices(){
    return this.http.get(this.apiUrl + 'getserviceprice/');
  }  

  getServicePriceId(id){
    return this.http.get(this.apiUrl+'getserviceprice'+id);
  }

  patchServicePrice(obj){
    return this.http.patch(this.apiUrl + 'updateserviceprice/', obj);
  }

  postServicePrice(obj){
    return this.http.post(this.apiUrl +'createserviceprice/', obj);
  } 

  deleteServicePrice(id){
    return this.http.delete(this.apiUrl +'deleteserviceprice'+ id);
  }
}
