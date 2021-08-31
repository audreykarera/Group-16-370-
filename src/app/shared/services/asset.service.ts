import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  equipmentUrl = 'http://localhost:60000/api/equipment/';
  vehicleUrl = 'http://localhost:60000/api/vehicle/';
  constructor(
    private http: HttpClient
  ) { }

  getEquipment(){
    return this.http.get(this.equipmentUrl + 'getequipment/');
  }

  getEquipmentId(id){
    return this.http.get(this.equipmentUrl + 'getequipment' + id);
  }
  patchEquipment(obj){
    return this.http.patch(this.equipmentUrl + 'updateequipment/',obj);
  }

  postEquipment(obj){
    return this.http.post(this.equipmentUrl + 'createequipment/', obj);
  }

  deleteEquipment(id){
    return this.http.delete(this.equipmentUrl + 'deleteequipment' + id);
  }



  getVehicle(){
    return this.http.get(this.vehicleUrl + 'getvehicles/');
  }

  getVehicleId(id){
    return this.http.get(this.vehicleUrl + 'getvehicle' + id);
  }

  patchVehicle(obj){
    return this.http.patch(this.vehicleUrl + 'updatevehicle/',obj);
  }

  postVehicle(obj){
    return this.http.post(this.vehicleUrl + 'createvehicle/', obj);
  }

  deleteVehicle(id){
    return this.http.delete(this.vehicleUrl + 'deletevehicle' + id);
  }
}
