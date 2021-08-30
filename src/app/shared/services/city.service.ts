import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl="http://localhost:60000/api/city/";
  constructor(private http:HttpClient) { }

 
  getCities(){
    return this.http.get(this.apiUrl + 'getcity/');
  }  

  getCityId(id){
    return this.http.get(this.apiUrl+'getcity'+id);
  }

  patchCity(obj){
    return this.http.patch(this.apiUrl + 'updatecity/', obj);
  }

  postCity(obj){
    return this.http.post(this.apiUrl +'createcity/', obj);
  } 

  deleteCity(id){
    return this.http.delete(this.apiUrl +'deletecity'+ id);
  }

}
