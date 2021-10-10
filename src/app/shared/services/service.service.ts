import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Service } from 'src/app/Interfaces/Index';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  apiUrl = "http://localhost:60000/api/service";
  constructor(
    private http: HttpClient
  ) { }

    getServices(): Observable<Service[]> {
      return this.http.get<Service[]>(`${this.apiUrl}`)
        .pipe(map(res => res));
    }
  
    getService(id: number): Observable<Service[]> {
      return this.http.get<Service[]>(`${this.apiUrl}/${id}`)
        .pipe(map(res => res));
    }
  
    UpdateService(service: Service) {
      return this.http.put(`${this.apiUrl}/${service.serviceId}`, service)
        .pipe(map(res => res));
    }
  
    CreateService(service: Service): Observable<any> {
      return this.http.post(`${this.apiUrl}`, service)
        .pipe(map(res => res));
    }
  
    DeleteService(id: number) {
      return this.http.delete(`${this.apiUrl}/${id}`)
        .pipe(map(res => res));
    }
    
  
}
