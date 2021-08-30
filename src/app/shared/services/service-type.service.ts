import { ServiceType } from 'src/app/models/serviceType';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {


  apiUrl="http://localhost:60000/api/servicetype/";
  serviceTypeService: ServiceTypeService;

  constructor(private http:HttpClient) { }

  getServiceTypes(){
    return this.http.get(this.apiUrl + 'getservicetype/');
  }  

  postServiceType(serviceType: ServiceType): Observable<ServiceType> {
    return this.http.post<ServiceType>(this.apiUrl, serviceType)
   
  }
  // postServiceType(obj){
  //   return this.http.get(this.apiUrl +'createservicetype/', obj);
  // }

  //edit

  deleteServiceType(id){
    return this.http.delete(this.apiUrl +'deleteservicetype'+ id);
  }
  
}


