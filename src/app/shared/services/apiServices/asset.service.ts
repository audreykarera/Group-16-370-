import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/models/asset';


@Injectable({
  providedIn: 'root'
})
export class AssetService {

  apiUrl = 'http://localhost:60000/api/vehicle';
  constructor(private http: HttpClient) { }

  // getVehicle(): Observable<Vehicle[]> {
  //   return this.http.get<Vehicle[]>(`${this.SERVER_URL}/getvehicles`);
  // }

  getVehicle(): Observable<Vehicle[]>{
    return this.http.get<Vehicle[]>(`${this.apiUrl}/getvehicles`);
  }

  postVehicle(obj){
    return this.http.post(this.apiUrl + 'createvehicle/', obj)
  }

  deleteVehicle(id){
    return this.http.delete(this.apiUrl + 'deletevehicle', id)
  }

}
