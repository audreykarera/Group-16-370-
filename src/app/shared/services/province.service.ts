import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
apiUrl="http://localhost:60000/api/province/";

  constructor(private http:HttpClient) { }

  getProvinces(){
    return this.http.get(this.apiUrl+'getprovince/');
  }
  deleteProvince(id){
    return this.http.delete(this.apiUrl+'deleteprovince'+id);
  }
}
