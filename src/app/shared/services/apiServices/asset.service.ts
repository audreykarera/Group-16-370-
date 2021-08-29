import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/Interfaces/apiCalls';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL = 'http://localhost:60000/api/vehicle'
  constructor(private http: HttpClient) { }

  getVehicle(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.SERVER_URL}/getvehicles`);
  }

}
