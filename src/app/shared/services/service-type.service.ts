import { ServiceType } from 'src/app/models/serviceType';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {
  apiUrl = "http://localhost:60000/api/servicetype/";
  constructor(
    private http: HttpClient
  ) { }

  getServiceTypes() {
    return this.http.get(this.apiUrl + 'getservicetype/');
  }

  getServiceTypeId(id) {
    return this.http.get(this.apiUrl + 'getservicetype' + id);
  }

  patchServiceType(obj) {
    return this.http.patch(this.apiUrl + 'updateservicetype/', obj);
  }

  postServiceType(obj) {
    return this.http.post(this.apiUrl + 'createservicetype/', obj);
  }

  deleteServiceType(id) {
    return this.http.delete(this.apiUrl + 'deleteservicetype' + id);
  }
  getServiceTypeByName(name){
    return this.http.get(this.apiUrl + 'getservicetypebyname' + name); 
  }
  

}


