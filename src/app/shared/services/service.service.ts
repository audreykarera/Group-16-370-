import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Service } from 'src/app/models/service';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
apiUrl="http://localhost:60000/api/service/";

  constructor(
    private http:HttpClient
    ) { }

 
    getServices() {
      return this.http.get(this.apiUrl + 'getservice/');
    }
  
    getServiceId(id) {
      return this.http.get(this.apiUrl + 'getservice' + id);
    }
  
    patchService(obj) {
      return this.http.patch(this.apiUrl + 'updateservice/', obj);
    }
  
    postService(obj) {
      return this.http.post(this.apiUrl + 'createservice/', obj);
    }
  
    deleteService(id) {
      return this.http.delete(this.apiUrl + 'deleteservice' + id);
    }
    getServiceByName(name){
      return this.http.get(this.apiUrl + 'getservicebyname' + name); 
    }
  

}
