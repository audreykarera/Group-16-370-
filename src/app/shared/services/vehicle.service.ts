import { Vehicle } from './../../Interfaces/Index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  apiUrl = 'http://localhost:60000/api/vehicle';

  constructor(
    private http: HttpClient
  ) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  getVehicle(id: number): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  UpdateVehicle(vehicle: Vehicle) {
    return this.http.put(`${this.apiUrl}/${vehicle.VehicleId}`, vehicle)
      .pipe(map(res => res));
  }

  CreateVehicle(vehicle: Vehicle): Observable<any> {
    return this.http.post(`${this.apiUrl}`, vehicle)
      .pipe(map(res => res));
  }

  DeleteVehicle(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  // DeleteTitle(id){
  //   return this.http.delete(`${this.apiUrl}/`+ id);
  // }


}
