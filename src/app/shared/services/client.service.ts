import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/Interfaces/Index';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiUrl='http://localhost:60000/api/client';

  constructor(
    private http:HttpClient
  ) { }

  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiUrl}`)
    .pipe(map(res=>res));    
  }
  //get client by Id
  getClient(clientId:number):Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiUrl}/${clientId}`)
    .pipe(map(res=>res));
  }

  // //get client by Id
  // getClient(clientId:number):Observable<Client[]>{
  //   return this.http.get<Client[]>(`${this.apiUrl}getclient/${clientId.toString}`)
  //   .pipe(map(res=>res));
  // }
}
  