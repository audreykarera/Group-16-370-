import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuburbService {
  apiUrl="http://localhost:60000/api/suburb/";

  constructor(private http:HttpClient) { }

  getProvinces(){
    return this.http.get(this.apiUrl+'getsuburb/');
  }
  deleteProvince(id){
    return this.http.delete(this.apiUrl+'deletesuburb'+id);
  }
}
