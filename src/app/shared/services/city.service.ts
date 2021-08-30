import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl="http://localhost:60000/api/city/";
  constructor(private http:HttpClient) { }

  getCities(){
    return this.http.get(this.apiUrl+'getcity/');
  }
  deleteCity(id){
    return this.http.delete(this.apiUrl+'deletecity'+id);
  }

}
