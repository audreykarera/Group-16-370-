import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  apiUrl = 'http://localhost:60000/api/equipment/';

  constructor(
    private http: HttpClient
  ) { }

  getEquipments(){
    return this.http.get(this.apiUrl + 'getequipment/'); 
  }

  getEquipment(id){
    return this.http.get(this.apiUrl + 'getequipment' + id);
  }

  patchEquipment(obj){
    return this.http.patch(this.apiUrl + 'updateequipment/',obj);
  }

  postVehicle(obj){
    return this.http.post(this.apiUrl + 'createequipment/', obj);
  }

  deleteEquipment(id){
    return this.http.delete(this.apiUrl + 'deleteequipment' + id);
  }
}
