import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  apiUrl="http://localhost:60000/api/location/";

  constructor(private http:HttpClient) { }

  getProvinces(){
    return this.http.get(this.apiUrl+'getlocation/');
  }
  deleteProvince(id){
    return this.http.delete(this.apiUrl+'deletelocation'+id);
  }
}
