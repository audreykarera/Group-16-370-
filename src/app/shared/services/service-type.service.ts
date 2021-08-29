import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { ServiceType } from 'src/app/models/serviceType';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {
  apiUrl="http://localhost:60000/api/servicetype/";

  constructor(private http:HttpClient) { }

  getServiceType():Observable<ServiceType[]>{
    console.log(`${this.apiUrl}getservicetype`)
    return this.http.get<ServiceType[]>(`${this.apiUrl}getservicetype`).pipe(map(res=>res));
  }
}
