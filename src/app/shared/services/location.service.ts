import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  apiUrl="http://localhost:60000/api/location/";

  constructor(private http:HttpClient) { }

  
  getLocations(){
    return this.http.get(this.apiUrl + 'getlocation/');
  }  

  getLocationId(id){
    return this.http.get(this.apiUrl+'getlocation'+id);
  }

  patchLocation(obj){
    return this.http.patch(this.apiUrl + 'updatelocation/', obj);
  }

  postLocation(obj){
    return this.http.post(this.apiUrl +'createlocation/', obj);
  } 

  deleteLocation(id){
    return this.http.delete(this.apiUrl +'deletelocation'+ id);
  }
}
