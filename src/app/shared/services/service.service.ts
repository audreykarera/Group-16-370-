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
  constructor(private http:HttpClient) { }

  // getAllService():Observable<Service[]>{
  //   return this.http.get<Service[]>(this.apiUrl + '/getService');
  // }

  getServices():Observable<Service[]>{
    console.log(`${this.apiUrl}getservice`)
    return this.http.get<Service[]>(`${this.apiUrl}getservice`).pipe(map(res=>res));
  }

  

}
