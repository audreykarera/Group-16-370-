import { ServiceType } from './../../../Interfaces/dialog.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  SERVER_URL = 'http://localhost:60000/api/servicetype'
  constructor(private http:HttpClient) { }

  getServiceType(): Observable<ServiceType[]> {
    return this.http.get<ServiceType[]>(`${this.SERVER_URL}/getservicetype`);
  }
}
