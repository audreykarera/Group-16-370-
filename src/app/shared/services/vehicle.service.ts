import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  apiUrl = 'http://localhost:60000/api/vehicle/';

  constructor(
    private http: HttpClient
  ) { }

  getVehicles(){
    return this.http.get(this.apiUrl + 'getvehicles/');
  }

  getVehicleId(id){
    return this.http.get(this.apiUrl + 'getvehicle' + id);
  }

  patchVehicle(obj){
    return this.http.patch(this.apiUrl + 'updatevehicle/',obj);
  }

  postVehicle(obj){
    return this.http.post(this.apiUrl + 'createvehicle/', obj);
  }

  deleteVehicle(id){
    return this.http.delete(this.apiUrl + 'deletevehicle' + id);
  }
}
