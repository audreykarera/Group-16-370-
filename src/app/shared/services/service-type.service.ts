
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServiceType } from 'src/app/Interfaces/Index';


@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {
  apiUrl = "http://localhost:60000/api/servicetype";
  constructor(
    private http: HttpClient
  ) { }

  getServiceTypes(): Observable<ServiceType[]> {
    return this.http.get<ServiceType[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  getServiceType(id: number): Observable<ServiceType[]> {
    return this.http.get<ServiceType[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  UpdateServiceType(serviceType: ServiceType) {
    return this.http.put(`${this.apiUrl}/${serviceType.serviceTypeId}`, serviceType)
      .pipe(map(res => res));
  }

  CreateServiceType(serviceType: ServiceType): Observable<any> {
    return this.http.post(`${this.apiUrl}`, serviceType)
      .pipe(map(res => res));
  }

  DeleteServiceType(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  // DeleteServiceType(id){
  //   return this.http.delete(`${this.apiUrl}/`+ id);
  // }


 
  

}


